import BaseGame from "./BaseGame";
//import {boardRowNames, boardColumnNames} from "./figures_placement";
import {threeZerosMove, twoZerosMove} from "./moves/other_figures_moves";

class PartyGame extends BaseGame {
    constructor(props) {
        super(props);
        this.partyDesc = parsePGNFile(props.pgnFilename)
    }

}

function parsePGNFile(filename) {
    return {
        player1: "Kasparov",
        player2: "Karlsen",
        moves: []
    }
}

function parseMove(move, player) {
    if (move === "0-0"){
         return twoZerosMove(player);
    }else if (move === "0-0-0"){
        return threeZerosMove(player);
    }
}