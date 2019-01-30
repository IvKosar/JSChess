import BaseGame from "./BaseGame";
import {threeZerosMove, twoZerosMove} from "./moves/other_figures_moves";
import FIGURES, {boardColumnNames, boardRowNames} from "./figures_placement";

class PartyGame extends BaseGame {
    constructor(props) {
        super(props);
        this.partyDesc = parsePGNFile(props.pgnFilename);
        this.state.current_move = 0;
    }

    parseMove(move, current_player) {
        if (move === "0-0"){
            return {
                moves: twoZerosMove(this.constants.COLOR_MAP[current_player])
            };
        }else if (move === "0-0-0"){
            return {
                moves: threeZerosMove(this.constants.COLOR_MAP[current_player])
            };
        }
        else{
            move = move.replace('+', '');
            move = move.replace('x', '');
            let piece_type;
            let destination = move.slice(-2);
            let transform_piece = "";
            let is_transform = false;
            if ("=" in destination){
                is_transform = true;
                destination = move.slice(0, 2);
                transform_piece = destination[destination.length - 1];
            }
            move = move.slice(0, -2);
            if (move[0].toUpperCase() === move[0]) {
                piece_type = move[0];
                move = move.slice(1);
            }else{
                piece_type = "P";
            }

            let move_details = {
                piece: piece_type,
                destination: destination,
                source: move,
                transform: {
                    is_transform:is_transform,
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

        let player_pieces = this.constants.PLAYER_MAP[current_player]();
        let valid_player_pieces = player_pieces
            .filter(p => p.title === move.piece.toUpperCase())
            .filter(p => p.valid_moves().find(([r, c]) => r === dest_row && c === dest_col) != null);

        if (valid_player_pieces.length > 1){
            result.moves = [this.parseMultipleSources(move, valid_player_pieces)]
        }else{
            let src_row, src_col = valid_player_pieces[0].position;
            result.moves = [
                [[src_row, src_col], [dest_row, dest_col]]
            ]
        }
    }

    parseMultipleSources(move, pieces){
        let dst_row = boardRowNames[move.destination[1]];
        let dst_col = boardColumnNames[move.destination[0].toUpperCase()];
        if (move.piece === "P"){
            let valid_pieces = pieces.filter(p => p.position[1] === dst_col);
            let valid_piece = valid_pieces.sort((p0, p1) =>
                Math.abs(dst_row - p0.position[0]) >
                Math.abs(dst_row - p1.position[0]))[0];
            let src_row, src_col = valid_piece.position;
            if (move.source){
                src_col = boardColumnNames[move.source.toUpperCase()]
            }
            return [[src_row, src_col], [dst_row, dst_col]]
        }else{
            let source_is_col = isNaN(parseInt(move.source));
            let valid_piece = pieces
                .find(p => source_is_col ? p.position[1] === boardColumnNames[move.source.toUpperCase()] :
                                            p.position[0] === boardRowNames[parseInt(move.source)]);
            return [valid_piece.position, [dst_row, dst_col]]
        }
    }

    handleClick(){
        let result = this.parseMove(this.partyDesc.moves[this.state.current_move],
            this.constants.COLOR_MAP[this.state.current_player]);
        this.state.current_move++;
        this.state.current_player = (this.state.current_player + 1) % 2;
    }

}

function parsePGNFile(filename) {
    return {
        players: {
            0: "Kasparov",
            1: "Karlsen",
        },
        moves: []
    }
}
