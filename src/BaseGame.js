import React from "react";
import {calculateDraw, calculateWinner, getBlackFigures, getWhiteFigures} from "./chess_backend";
import placeFigures from "./figures_placement";
import Board from "./Board";

export default class BaseGame extends React.Component {
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
                1: getBlackFigures
            }
        };
        this.state = {
            figures: placeFigures(),
            current_player: 0,
        };
    }

    move(field, [r0, c0], [r1, c1]) {
        field[r0][c0].has_moved = true;
        field[r1][c1] = field[r0][c0];
        field[r0][c0] = null;
        return field;
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
                    <Board
                        figures={this.state.figures}
                        current_player={this.state.current_player}
                        HEIGHT={this.constants.HEIGHT}
                        WIDTH={this.constants.WIDTH}
                        COLOR_MAP={this.constants.COLOR_MAP}
                    />
                </div>
                <dl className="game-info">
                    <dt className={"game-info__key"}>{status_key}</dt>
                    <dd className={"game-info__value" + status_value_modifier}>
                        {status_value}
                    </dd>
                    {/*<ol>{moves}</ol>*/}
                </dl>
            </main>
        );
    }
}