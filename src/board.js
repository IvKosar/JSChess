import React from "react";

function Square(props) {
    let is_selected = props.is_selected ? " board__square--selected" : "";
    let is_valid_move = props.is_valid_move ? " board__square--valid-move" : "";
    return (
        <button
            className={
                "board__square board__square--" + props.color + " board__square--figure-" + props.figure_color
                + is_selected + is_valid_move
            }
            onClick={props.onClick}>
            <img src={props.icon} alt={props.title}/>
        </button>
    );
}

export default class Board extends React.Component {
    renderSquare(i, color) {
        let row = Math.floor(i / 8), col = i % 8;
        let figure = this.props.figures[row][col];
        let icon = figure ? figure.icon : null;
        let title = figure ? figure.title : null;

        let figure_color = null;
        if (figure) {
            figure_color = figure.color;
        }

        let selected_sq = this.props.selected_square;
        let is_selected = selected_sq && selected_sq[0] * 8 + selected_sq[1] === i;

        let valid_moves = this.props.valid_moves.map(([r, c]) => r * 8 + c);
        let is_valid_move = valid_moves.includes(i);

        return <Square icon={icon}
                       title={title}
                       color={color}
                       figure_color={figure_color}
                       is_selected={is_selected}
                       is_valid_move={is_valid_move}
                       onClick={() => this.props.onClick(i)}
        />
    }

    generate_board() {
        let board = [];
        let square_id = 0;
        let color = 0;
        for (let i = 0; i < this.props.HEIGHT; i++) {
            let row = [];
            for (let j = 0; j < this.props.WIDTH; j++) {
                row.push(this.renderSquare(i*8+j, this.props.COLOR_MAP[color]));
                color = (color + 1) % 2;
                square_id = square_id + 1;
            }
            color = (color + 1) % 2;
            board.push(<div className={"board__row"}>{row}</div>)
        }
        return board;
    }

    render() {
        return (
            <div>
                {this.generate_board()}
            </div>
        );
    }
}
