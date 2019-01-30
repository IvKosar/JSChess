import BaseGame from "./BaseGame";
import {threeZerosMove, twoZerosMove} from "./moves/other_figures_moves";
import FIGURES, {boardColumnNames, boardRowNames} from "./figures_placement";
import {calculateDraw, calculateWinner} from "./chess_backend";
import Board from "./Board";
import React from "react";

export default class PartyGame extends BaseGame {
    constructor(props) {
        super(props);
        this.partyDesc = parsePGNFile(props.pgnFilename);
        this.state.current_move = 0;
        this.state.players[0] = this.partyDesc.players[0];
        this.state.players[1] = this.partyDesc.players[1];
    }

    parseMove(move, current_player) {
        if (move === "0-0") {
            return {
                moves: twoZerosMove(this.constants.COLOR_MAP[current_player])
            };
        } else if (move === "0-0-0") {
            return {
                moves: threeZerosMove(this.constants.COLOR_MAP[current_player])
            };
        } else if (move === "0-1") {
            return {
                winner: 1,
            }
        } else if (move === "1-0") {
            return {
                winner: 0,
            }
        }
        else if (move === "1/2-1/2") {
            return {
                draw: true,
            }
        }
        else {
            move = move.replace('+', '');
            move = move.replace('x', '');
            let piece_type;
            let destination = move.slice(-2);
            let transform_piece = "";
            let is_transform = false;
            if (destination.includes('=')) {
                is_transform = true;
                destination = move.slice(0, 2);
                transform_piece = destination[destination.length - 1];
            }
            move = move.slice(0, -2);
            if (move && move[0].toUpperCase() === move[0]) {
                piece_type = move[0];
                move = move.slice(1);
            } else {
                piece_type = "P";
            }

            let move_details = {
                piece: piece_type,
                destination: destination,
                source: move,
                transform: {
                    is_transform: is_transform,
                    transform_piece: transform_piece,
                }
            };
            return this.parseUsualMove(move_details, current_player);
        }
    }

    parseUsualMove(move, current_player) {
        let result = {};

        let dest_row = boardRowNames[move.destination[1]];
        let dest_col = boardColumnNames[move.destination[0].toUpperCase()];

        let board = this.state.history[this.state.history.length - 1].figures.slice();
        let player_pieces = this.constants.PLAYER_MAP[current_player](board);
        let valid_player_pieces = player_pieces
            .filter(p => p.title === move.piece.toUpperCase())
            .filter(p => p.valid_moves(board, p.position).find(([r, c]) => r === dest_row && c === dest_col) != null);

        if (valid_player_pieces.length > 1) {
            result.moves = [this.parseMultipleSources(move, valid_player_pieces)]
        } else {
            let [src_row, src_col] = valid_player_pieces[0].position;
            result.moves = [
                [[src_row, src_col], [dest_row, dest_col]]
            ];
            console.log(result.moves)
        }
        return result;
    }

    parseMultipleSources(move, pieces) {
        let dst_row = boardRowNames[move.destination[1]];
        let dst_col = boardColumnNames[move.destination[0].toUpperCase()];
        if (move.piece === "P") {
            let valid_pieces = pieces.filter(p => p.position[1] === dst_col);
            let valid_piece = valid_pieces.sort((p0, p1) =>
                Math.abs(dst_row - p0.position[0]) >
                Math.abs(dst_row - p1.position[0]))[0];
            let [src_row, src_col] = valid_piece.position;
            if (move.source) {
                src_col = boardColumnNames[move.source.toUpperCase()]
            }
            return [[src_row, src_col], [dst_row, dst_col]]
        } else {
            let source_is_col = isNaN(parseInt(move.source));
            let valid_piece = pieces
                .find(p => source_is_col ? p.position[1] === boardColumnNames[move.source.toUpperCase()] :
                    p.position[0] === boardRowNames[parseInt(move.source)]);
            return [valid_piece.position, [dst_row, dst_col]]
        }
    }

    handleClick() {
        let board = this.state.history[this.state.history.length - 1].figures.slice();
        let result = this.parseMove(this.partyDesc.moves[this.state.current_move].move,
            this.state.current_player);

        if ("winner" in result) {
            this.setState({
                history: this.state.history,
                current_player: (this.state.current_player + 1) % 2,
                game_result: {
                    winner: result.winner,
                    draw: null,
                }
            });
            return;
        } else if ("draw" in result) {
            this.setState({
                history: this.state.history,
                current_player: (this.state.current_player + 1) % 2,
                game_result: {
                    winner: null,
                    draw: result.draw,
                }
            });
            return;
        }

        for (let [src, dst] of result.moves) {
            board = this.move(board, src, dst);
        }
        this.state.current_move++;
        this.setState({
            history: this.state.history.concat([{
                figures: board
            }]),
            current_player: (this.state.current_player + 1) % 2,
            game_result: {
                winner: null,
                draw: null,
            }
        });
    }

    render() {
        let current_board = this.state.history[this.state.history.length - 1].figures;
        let status_key, status_value, status_value_modifier;
        let winner = this.state.game_result.winner;
        let draw = this.state.game_result.draw;
        if (winner) {
            status_key = "Winner:";
            status_value = this.state.players[winner];
            status_value_modifier = " game-info__value--" + winner;
        } else if (draw) {
            status_key = "Draw";
            status_value = "";
            status_value_modifier = "";
        } else {
            let player = !this.state.current_player ? "w" : "b";
            status_key = "Current player:";
            status_value = this.state.players[this.state.current_player];
            status_value_modifier = " game-info__value--" + player;
        }
        return (
            <main className="game">
                <div className="board">
                    <Board
                        figures={current_board}
                        current_player={this.state.current_player}
                        HEIGHT={this.constants.HEIGHT}
                        WIDTH={this.constants.WIDTH}
                        COLOR_MAP={this.constants.COLOR_MAP}
                    />
                </div>
                <div className="game-info">
                    <p className={"game-info__key"}>
                        {status_key}
                        <span className={"game-info__value" + status_value_modifier}>
                            {status_value}
                        </span>
                    </p>

                    <button className={"control-button"} onClick={() => this.handleClick()}><span>Next Move</span><span>→</span></button>
                    {/*<ol>{moves}</ol>*/}
                </div>

            </main>
        );
    }
}

function parsePGNFile(filename) {
    return {
        players: {
            0: "Kasparov",
            1: "Karlsen",
        },
        moves: [
            { move: 'e4', move_number: 1},
            { move: 'e5'},
            { move: 'Nf3', move_number: 2},
            { move: 'Nc6'},
            { move: 'Bc4', move_number: 3},
            { move: 'Bc5', ravs: [{ moves: [{move_number: 3, move: "...Nf6", comment: "is the two knights"}]}]},
            { move: 'b4', move_number: 4},
            { move: 'Bxb4'},
            { move: 'c3', move_number: 5},
            { move: 'Ba5'},
            { move: 'd4', move_number: 6},
            { move: 'exd4'},
            { move: '0-0', move_number: 7},
            { move: 'Nge7', nags: ["$1"]},
            {move: "0-1"}
        ]
    }
}
