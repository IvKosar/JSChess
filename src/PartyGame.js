import BaseGame from "./BaseGame";
import {threeZerosMove, twoZerosMove} from "./moves/other_figures_moves";
import FIGURES from "./figures_placement";

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
            return this.parseNonZerosMove(move, current_player);
        }
    }

    parseNonZerosMove(move, current_player) {
        let result = {};

        let destination = move.slice(-2);
        if ("=" in destination){
            result.transform = destination[destination.length - 1];
            move = move.slice(0, -2)
        }
        if ("x" in move){
            result.moves = this.parseBeatMove(move, current_player);
        }
        result.moves = this.parseUsualMove(move, current_player);
        return result;
    }

    parseUsualMove(move, current_player) {
        let piece = move[0];
        let destination = move.slice(-2);
        if (move === destination){
            piece = "P";
        }
        let player_pieces = this.constants.PLAYER_MAP[current_player]();
        let valid_player_pieces = player_pieces.filter()
    }

    parseBeatMove(move, player_color) {

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
