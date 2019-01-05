import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import {placeFigures, getWhiteFigures, getBlackFigures, calculateWinner, calculateDraw} from'./chess_backend';

import "./styles/index.scss";
import "./styles/board.scss";
import "./styles/game.scss";


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.constants = {
            WIDTH: 8,
            HEIGHT: 8,
            COLOR_MAP: {
                0: "white",
                1: "black"
            },
            PLAYER_MAP: {
                0: getWhiteFigures,
                1: getBlackFigures,
            }
        };
        this.state = {
            figures: placeFigures(),
            current_player: 0,
            squares_modifications: {
                figure_selected_position: null,
                valid_moves: [],
            },

        }
    }

    handleClick(i) {
        let row = Math.floor(i/8);
        let col = i % 8;

        let state = this.state;
        let player_figures = this.constants.PLAYER_MAP[this.state.current_player](this.state.figures);
        if (this.state.figures[row][col] && this.state.figures[row][col].color === player_figures[0].color) {
            // player selects figure
            console.log("SELECT");
            state = this.handleSelect([row, col]);
        } else {
            state = this.handleMove([row, col]);
        }
        this.setState(state);
    }

    handleMove([row, col]) {
        let field = this.state.figures.slice();
        let next_player = this.state.current_player;
        let figure_selected_position = this.state.squares_modifications.figure_selected_position;
        if (figure_selected_position !== null) {
            let sf_row = figure_selected_position[0], sf_col = figure_selected_position[1];
            let selected_figure = field[sf_row][sf_col];
            let valid_moves = selected_figure.valid_moves(this.state.figures, sf_row, sf_col);
            console.log(valid_moves);
            if (valid_moves.find(([r, c]) => r === row && c === col) != null) {
                field = this.move(field, [sf_row, sf_col], [row, col]);
                next_player = (this.state.current_player + 1) % 2;
            }
        }
        return {
            figures: field,
            current_player: next_player,
            squares_modifications: {
                figure_selected_position: null,
                valid_moves: [],
            }
        };
    }

    move(field, [r0, c0], [r1, c1]){
        field[r0][c0].has_moved = true;
        field[r1][c1] = field[r0][c0];
        field[r0][c0] = null;
        return field;
    }

    handleSelect([row, col]) {
        let figure_selected_position = [row, col];
        let figure_selected = this.state.squares_modifications.figure_selected_position;
        let valid_moves = [];
        // player unselect figure
        if (figure_selected && figure_selected[0] === row && figure_selected[1] === col){
            figure_selected_position = null;
        }else {
            let figure = this.state.figures[row][col];
            valid_moves = figure.valid_moves(this.state.figures, row, col);
        }
        return {
            figures: this.state.figures,
            current_player: this.state.current_player,
            squares_modifications: {
                figure_selected_position: figure_selected_position,
                valid_moves: valid_moves,
            }
        };
    }

    render() {
        let status_key, status_value, status_value_modifier;
        let winner = calculateWinner(this.state.figures);
        let draw = calculateDraw(this.state.figures);
        if (winner) {
            status_key = "Winner:";
            status_value = winner;
            status_value_modifier = " game-info__value--" + winner;
        } else if (draw) {
            status_key = "Draw";
            status_value = "";
            status_value_modifier = "";
        } else {
            let player = !this.state.current_player ? "white" : "black";
            status_key = "Current player:";
            status_value = player;
            status_value_modifier = " game-info__value--" + player;
        }
        return (
            <main className="game">
                <div className="board">
                    <Board figures={this.state.figures}
                           HEIGHT={this.constants.HEIGHT}
                           WIDTH={this.constants.WIDTH}
                           COLOR_MAP={this.constants.COLOR_MAP}
                           selected_square={this.state.squares_modifications.figure_selected_position}
                           valid_moves={this.state.squares_modifications.valid_moves}
                           onClick={i => this.handleClick(i)}
                    />
                </div>
                <dl className="game-info">
                    <dt className={"game-info__key"}>{status_key}</dt>
                    <dd className={"game-info__value" + status_value_modifier}>{status_value}</dd>
                    {/*<ol>{moves}</ol>*/}
                </dl>
            </main>
        );
    }
}

const A = 0;
const B = 1;
const C = 2;
const D = 3;
const E = 4;
const F = 6;
const G = 6;
const H = 7;

ReactDOM.render(<Game/>, document.getElementById("root"));