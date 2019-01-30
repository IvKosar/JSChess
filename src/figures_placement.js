import {rockValidMoves, knightValidMoves, queenValidMoves, kingValidMoves} from "./moves/other_figures_moves"
import {bishopValidMoves} from "./moves/bishop_moves";
import pawnValidMoves from "./moves/pawn_moves";

export const boardColumnNames = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
};

export const boardRowNames = {
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 0,
};

export const FIGURES = {
    w: {
        Ra1w: {
            title: "R",
            icon: "♖",
            color: "w",
            valid_moves: rockValidMoves,
            has_moved: false,
            position: [boardRowNames[1], boardColumnNames.A],
        },
        Nb1w: {
            title: "N",
            icon: "♘",
            color: "w",
            valid_moves: knightValidMoves,
            position: [boardRowNames[1], boardColumnNames.B],
        },
        Bc1w: {
            title: "B",
            icon: "♗",
            color: "w",
            valid_moves: bishopValidMoves,
            position: [boardRowNames[1], boardColumnNames.C],
        },
        Qd1w: {
            title: "Q",
            icon: "♕",
            color: "w",
            valid_moves: queenValidMoves,
            position: [boardRowNames[1], boardColumnNames.D],
        },
        Ke1w: {
            title: "K",
            icon: "♔",
            color: "w",
            valid_moves: kingValidMoves,
            has_moved: false,
            position: [boardRowNames[1], boardColumnNames.E],
        },
        Bf1w: {
            title: "B",
            icon: "♗",
            color: "w",
            valid_moves: bishopValidMoves,
            position: [boardRowNames[1], boardColumnNames.F],
        },
        Ng1w: {
            title: "N",
            icon: "♘",
            color: "w",
            valid_moves: knightValidMoves,
            position: [boardRowNames[1], boardColumnNames.G],
        },
        Rh1w: {
            title: "R",
            icon: "♖",
            color: "w",
            valid_moves: rockValidMoves,
            has_moved: false,
            position: [boardRowNames[1], boardColumnNames.H],
        },
        pa2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.A],
        },
        pb2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.B],
        },
        pc2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.C],
        },
        pd2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.D],
        },
        pe2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.E],
        },
        pf2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.F],
        },
        pg2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.G],
        },
        ph2w: {
            title: "P",
            icon: "♙",
            color: "w",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[2], boardColumnNames.H],
        },
    },
    b: {
        Ra8b: {
            title: "R",
            icon: "♜",
            color: "b",
            valid_moves: rockValidMoves,
            has_moved: false,
            position: [boardRowNames[8], boardColumnNames.A],
        },
        Nb8b: {
            title: "N",
            icon: "♞",
            color: "b",
            valid_moves: knightValidMoves,
            position: [boardRowNames[8], boardColumnNames.B],
        },
        Bc8b: {
            title: "B",
            icon: "♝",
            color: "b",
            valid_moves: bishopValidMoves,
            position: [boardRowNames[8], boardColumnNames.C],
        },
        Qd8b: {
            title: "Q",
            icon: "♛",
            color: "b",
            valid_moves: queenValidMoves,
            position: [boardRowNames[8], boardColumnNames.D],
        },
        Ke8b: {
            title: "K",
            icon: "♚",
            color: "b",
            valid_moves: kingValidMoves,
            has_moved: false,
            position: [boardRowNames[8], boardColumnNames.E],
        },
        Bf8b: {
            title: "B",
            icon: "♝",
            color: "b",
            valid_moves: bishopValidMoves,
            position: [boardRowNames[8], boardColumnNames.F],
        },
        Ng8b: {
            title: "N",
            icon: "♞",
            color: "b",
            valid_moves: knightValidMoves,
            position: [boardRowNames[8], boardColumnNames.G],
        },
        Rh8b: {
            title: "R",
            icon: "♜",
            color: "b",
            valid_moves: rockValidMoves,
            has_moved: false,
            position: [boardRowNames[8], boardColumnNames.H],
        },
        pa7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.A],
        },
        pb7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.B],
        },
        pc7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.C],
        },
        pd7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.D],
        },
        pe7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.E],
        },
        pf7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.F],
        },
        pg7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.G],
        },
        ph7b: {
            title: "P",
            icon: "♟",
            color: "b",
            valid_moves: pawnValidMoves,
            has_moved: false,
            position: [boardRowNames[7], boardColumnNames.H],
        },
    }
};

export default function placeFigures() {
    // WHITE
    const Ra1w = {
        title: "R",
        icon: "♖",
        color: "w",
        valid_moves: rockValidMoves,
        has_moved: false,
    };
    const Nb1w = {
        title: "N",
        icon: "♘",
        color: "w",
        valid_moves: knightValidMoves
    };
    const Bc1w = {
        title: "B",
        icon: "♗",
        color: "w",
        valid_moves: bishopValidMoves
    };
    const Qd1w = {
        title: "Q",
        icon: "♕",
        color: "w",
        valid_moves: queenValidMoves
    };
    const Ke1w = {
        title: "K",
        icon: "♔",
        color: "w",
        valid_moves: kingValidMoves,
        has_moved: false
    };
    const Bf1w = {
        title: "B",
        icon: "♗",
        color: "w",
        valid_moves: bishopValidMoves
    };
    const Ng1w = {
        title: "N",
        icon: "♘",
        color: "w",
        valid_moves: knightValidMoves
    };
    const Rh1w = {
        title: "R",
        icon: "♖",
        color: "w",
        valid_moves: rockValidMoves,
        has_moved: false,
    };
    const pa2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pb2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pc2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pd2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pe2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pf2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pg2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const ph2w = {
        title: "P",
        icon: "♙",
        color: "w",
        valid_moves: pawnValidMoves,
        has_moved: false
    };

    // BLACK
    const Ra8b = {
        title: "R",
        icon: "♜",
        color: "b",
        valid_moves: rockValidMoves,
        has_moved: false,
    };
    const Nb8b = {
        title: "N",
        icon: "♞",
        color: "b",
        valid_moves: knightValidMoves
    };
    const Bc8b = {
        title: "B",
        icon: "♝",
        color: "b",
        valid_moves: bishopValidMoves
    };
    const Qd8b = {
        title: "Q",
        icon: "♛",
        color: "b",
        valid_moves: queenValidMoves
    };
    const Ke8b = {
        title: "K",
        icon: "♚",
        color: "b",
        valid_moves: kingValidMoves,
        has_moved: false
    };
    const Bf8b = {
        title: "B",
        icon: "♝",
        color: "b",
        valid_moves: bishopValidMoves
    };
    const Ng8b = {
        title: "N",
        icon: "♞",
        color: "b",
        valid_moves: knightValidMoves
    };
    const Rh8b = {
        title: "R",
        icon: "♜",
        color: "b",
        valid_moves: rockValidMoves,
        has_moved: false,
    };
    const pa7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pb7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pc7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pd7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pe7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pf7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const pg7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };
    const ph7b = {
        title: "P",
        icon: "♟",
        color: "b",
        valid_moves: pawnValidMoves,
        has_moved: false
    };

    // empty square
    const _empty__field_ = null;

    return [
        [FIGURES.b.Ra8b, FIGURES.b.Nb8b, FIGURES.b.Bc8b, FIGURES.b.Qd8b, FIGURES.b.Ke8b, FIGURES.b.Bf8b, FIGURES.b.Ng8b, FIGURES.b.Rh8b],
        [FIGURES.b.pa7b, FIGURES.b.pb7b, FIGURES.b.pc7b, FIGURES.b.pd7b, FIGURES.b.pe7b, FIGURES.b.pf7b, FIGURES.b.pg7b, FIGURES.b.ph7b],
        [_empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_],
        [_empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_],
        [_empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_],
        [_empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_, _empty__field_],
        [FIGURES.w.pa2w, FIGURES.w.pb2w, FIGURES.w.pc2w, FIGURES.w.pd2w, FIGURES.w.pe2w, FIGURES.w.pf2w, FIGURES.w.pg2w, FIGURES.w.ph2w],
        [FIGURES.w.Ra1w, FIGURES.w.Nb1w, FIGURES.w.Bc1w, FIGURES.w.Qd1w, FIGURES.w.Ke1w, FIGURES.w.Bf1w, FIGURES.w.Ng1w, FIGURES.w.Rh1w]
    ];
}