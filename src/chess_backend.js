export function placeFigures() {
    // WHITE
    const ra1 = {
        title: 'R',
        icon: "https://img.icons8.com/ios/50/000000/queen.png",
        color: 'w',
        valid_moves: rockValidMoves,
    };
    const knb1 = {
        title: 'Kn',
        icon: "https://img.icons8.com/ios/50/000000/knight.png",
        color: 'w',
        valid_moves: knightValidMoves,
    };
    const bc1 = {
        title: 'B',
        icon: "https://img.icons8.com/ios/50/000000/bishop.png",
        color: 'w',
        valid_moves: bishopValidMoves,
    };
    const qd1 = {
        title: 'Q',
        icon: "https://img.icons8.com/ios/50/000000/queen.png",
        color: 'w',
        valid_moves: queenValidMoves,
    };
    const ke1 = {
        title: 'K',
        icon: "https://img.icons8.com/ios/50/000000/king.png",
        color: 'w',
        valid_moves: kingValidMoves,
        has_moved: false,
    };
    const bf1 = {
        title: 'B',
        icon: "https://img.icons8.com/ios/50/000000/bishop.png",
        color: 'w',
        valid_moves: bishopValidMoves,
    };
    const kng1 = {
        title: 'Kn',
        icon: "https://img.icons8.com/ios/50/000000/knight.png",
        color: 'w',
        valid_moves: knightValidMoves,
    };
    const rh1 = {
        title: 'R',
        icon: "https://img.icons8.com/ios/50/000000/queen.png",
        color: 'w',
        valid_moves: rockValidMoves,
    };
    const pa2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pb2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pc2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pd2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pe2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pf2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pg2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const ph2 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn.png",
        color: 'w',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };

    // BLACK
    const ra8 = {
        title: 'R',
        icon: "https://img.icons8.com/ios/50/000000/rook-filled.png",
        color: 'b',
        valid_moves: rockValidMoves,
    };
    const knb8 = {
        title: 'Kn',
        icon: "https://img.icons8.com/ios/50/000000/knight-filled.png",
        color: 'b',
        valid_moves: knightValidMoves,
    };
    const bc8 = {
        title: 'B',
        icon: "https://img.icons8.com/ios/50/000000/bishop-filled.png",
        color: 'b',
        valid_moves: bishopValidMoves,
    };
    const qd8 = {
        title: "Q",
        icon: "https://img.icons8.com/ios/50/000000/queen-filled.png",
        color: 'b',
        valid_moves: queenValidMoves,
    };
    const ke8 = {
        title: 'K',
        icon: "https://img.icons8.com/ios/50/000000/king-filled.png",
        color: 'b',
        valid_moves: kingValidMoves,
        has_moved: false,
    };
    const bf8 = {
        title: 'B',
        icon: "https://img.icons8.com/ios/50/000000/bishop-filled.png",
        color: 'b',
        valid_moves: bishopValidMoves,
    };
    const kng8 = {
        title: 'Kn',
        icon: "https://img.icons8.com/ios/50/000000/knight-filled.png",
        color: 'b',
        valid_moves: knightValidMoves,
    };
    const rh8 = {
        title: 'R',
        icon: "https://img.icons8.com/ios/50/000000/rook-filled.png",
        color: 'b',
        valid_moves: rockValidMoves,
    };
    const pa7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pb7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pc7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };const pd7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pe7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pf7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const pg7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };
    const ph7 = {
        title: 'P',
        icon: "https://img.icons8.com/ios/50/000000/pawn-filled.png",
        color: 'b',
        valid_moves: pawnValidMoves,
        has_moved: false,
    };


    // empty square
    const nill = null;

    return [
        [ ra8 , knb8, bc8 , qd8 , ke8 , bf8 , kng8, rh8 ],
        [ pa7 , pb7 , pc7 , pd7 , pe7 , pf7 , pg7 , ph7 ],
        [ nill, nill, nill, nill, nill, nill, nill, nill],
        [ nill, nill, nill, nill, nill, nill, nill, nill],
        [ nill, nill, nill, nill, nill, nill, nill, nill],
        [ nill, nill, nill, nill, nill, nill, nill, nill],
        [ pa2 , pb2 , pc2 , pd2 , pe2 , pf2 , pg2 , ph2 ],
        [ ra1 , knb1, bc1 , qd1 , ke1 , bf1 , kng1, rh1 ],
    ];

    //figures[G][4];

    // const move = ( [x0,y0], [x1,y1]) => {
    //     figures[x1][y1] = figures[x0][y0];
    //     figures[x0][y0] = n;
    // }
    // move ([G, 4], [G, 6])
}

export function calculateWinner(field) {
    return false;
}

export function calculateDraw(field) {
    return false;
}

function pawnValidMoves(field, row, col) {
    let pawn = field[row][col];
    let moves = [];
    let diagonal_moves = getDiagonalMoves([row, col]);
    console.log(diagonal_moves);
    // check if first move
    if (pawn.has_moved) {
        moves = pawn.color === 'w' ? [[row-1, col]] : [[row+1, col]]
    }
    else {
        moves = pawn.color === 'w' ? [[row-1, col], [row-2, col]] :
            [[row+1, col], [row+2, col]];
    }

    // eliminate other figures in front
    let nearest_figure = getNearestFigure(moves, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        moves = moves
            .filter(([r, c]) => pawn.color === 'w' ? r > nf_row : r < nf_row)
    }
    //check for possible enemies
    let next_row = pawn.color === 'w' ? row - 1 : row + 1;
    console.log(next_row);
    moves = moves
        .concat(
            diagonal_moves
                .reduce(function(arr, [r,c], i) {
                    if(r===next_row){
                        arr.push([r,c]);
                    } return arr
                }, [])
                .filter(([r, c]) => field[r][c] && field[r][c].color !== field[row][col].color)
        );
    console.log(moves);
    return moves;
}

function rockValidMoves(field, row, col) {
    let moves = getValidVerticalMoves(field, row, col);
    moves = moves.concat(getValidHorizontalMoves(field, row, col));
    return moves;
}

function knightValidMoves(field, row, col) {
    let moves = generateCombinations([-2, -1, 1, 2]);
    moves = moves.filter(([r, c]) => Math.abs(r) !== Math.abs(c));
    moves = moves.concat(moves.map(([x, y]) => [y, x]));
    moves = moves
        .map(([r, c]) => [ row + r, col + c ])
        .filter(([r, c]) => (r >= 0 && r < 8) && (c >=0 && c < 8))
        .filter(([r, c]) => field[r][c] == null || field[r][c].color !== field[row][col].color);
    console.log(moves);

    return moves;
}

function bishopValidMoves(field, row, col) {
    return getValidDiagonalMoves(field, row, col);
}

function queenValidMoves(field, row, col) {
    return getValidDiagonalMoves(field, row, col)
        .concat(getValidHorizontalMoves(field, row, col))
        .concat(getValidVerticalMoves(field, row, col));
}

function kingValidMoves(field, row, col) {
    let vertical_moves = getValidVerticalMoves(field, row, col);
    let horizontal_moves = getValidHorizontalMoves(field, row, col);
    let diagonal_moves = getValidDiagonalMoves(field, row, col);
    console.log("vertical");
    console.log(vertical_moves);

    let moves = [];
    // directions
    moves.push(vertical_moves.filter(([r, c]) => r < row).reverse()[0]);
    moves.push(vertical_moves.filter(([r, c]) => r > row)[0]);
    moves.push(horizontal_moves.filter(([r, c]) => c < col).reverse()[0]);
    moves.push(horizontal_moves.filter(([r, c]) => c > col)[0]);
    moves = moves.concat(diagonal_moves.filter(([r, c]) => r === row + 1 || r === row - 1));
    console.log(moves);

    return moves.filter(item => item !== undefined);
}

export function getWhiteFigures(field) {
    let figures = [];
    for (let r=0; r<field.length; r++){
        for (let c=0; c<field[r].length; c++){
            let figure = field[r][c];
            if (figure && figure.color === 'w'){
                figures.push(figure)
            }
        }
    }
    return figures;
}

export function getBlackFigures(field) {
    let figures = [];
    for (let r=0; r<field.length; r++){
        for (let c=0; c<field[r].length; c++){
            let figure = field[r][c];
            if (figure && figure.color === 'b'){
                figures.push(figure)
            }
        }
    }
    return figures;
}

function getVerticalMoves(col) {
    return Array.from(new Array(8), (val, index) => index).map(row => [row, col]);
}

function getHorizontalMoves(row) {
    return Array.from(new Array(8), (val, index) => index).map(col => [row, col]);
}

function getDiagonalMoves([row, col]) {
    let squares = generateCombinations(Array.from(new Array(8), (val, index) => index));
    squares = squares.concat(squares.map(([x, y]) => [y, x]));
    squares = squares.concat(Array.from(new Array(8), (val, index)=>index).map(index=>[index, index]));
    return squares
        .filter(([r, c]) => (r - (row - col) === c || r + (8 - 1 - col - row) === 8 - 1 - c) &&
            (r !== row || c !== col));
}

function getNearestFigure(moves, field, row, col) {
    let around_figures = moves.filter(([r, c]) => field[r][c] != null);
    console.log("around figs");
    console.log(around_figures);
    return around_figures
        .sort(([r0, c0], [r1, c1]) =>
            Math.abs(r0 - row) + Math.abs(c0 - col) > Math.abs(r1 - row) + Math.abs(c1 - col))[0];
}

function getValidVerticalMoves(field, row, col) {
    let moves = [];
    let vertical_moves = getVerticalMoves(col);
    console.log("vertical moves");
    console.log(vertical_moves);
    let moves_by_direction = {
        n: vertical_moves.filter(([r, c]) => r < row),
        s: vertical_moves.filter(([r, c]) => r > row),
    };

    // front
    let nearest_figure = getNearestFigure(moves_by_direction.n, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves =  moves_by_direction.n
            .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? r > nf_row : r >= nf_row)
    }else{
        moves = moves_by_direction.n;
    }

    // back
    nearest_figure = getNearestFigure(moves_by_direction.s, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves = moves.concat(moves_by_direction.s
            .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? r < nf_row : r <= nf_row));
    }else{
        moves = moves.concat(moves_by_direction.s);
    }
    return moves;
}

function getValidHorizontalMoves(field, row, col){
    let moves = [];
    let horizontal_moves = getHorizontalMoves(row);
    let moves_by_direction = {
        w: horizontal_moves.filter(([r, c]) => c < col),
        e: horizontal_moves.filter(([r, c]) => c > col),
    };

    // left
    let nearest_figure = getNearestFigure(moves_by_direction.w, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves = moves_by_direction.w
            .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? c > nf_col : c >= nf_col);
    }else{
        moves = moves_by_direction.w;
    }
    // right
    nearest_figure = getNearestFigure(moves_by_direction.e, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves = moves.concat(moves_by_direction.e
            .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? c < nf_col : c <= nf_col));
    }else{
        moves = moves.concat(moves_by_direction.e);
    }

    return moves;
}

function getValidDiagonalMoves(field, row, col){
    let moves = [];
    let diagonal_moves = getDiagonalMoves([row, col]);
    let moves_by_directions = {
        nw: diagonal_moves.filter(([r, c]) => r < row && c < col),
        ne: diagonal_moves.filter(([r, c]) => r < row && c > col),
        se: diagonal_moves.filter(([r, c]) => r > row && c > col),
        sw: diagonal_moves.filter(([r, c]) => r > row && c < col),
    };

    // north-west
    let nearest_figure = getNearestFigure(moves_by_directions.nw, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves = moves_by_directions.nw
            .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? r > nf_row : r >= nf_row);
    }else{
        moves = moves_by_directions.nw;
    }
    // north-east
    nearest_figure = getNearestFigure(moves_by_directions.ne, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves = moves
            .concat(moves_by_directions.ne
                .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? r > nf_row : r >= nf_row));
    }else{
        moves = moves.concat(moves_by_directions.ne);
    }

    // south-east
    nearest_figure = getNearestFigure(moves_by_directions.se, field, row, col);
    if (nearest_figure) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves = moves
            .concat(moves_by_directions.se
                .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? r < nf_row : r <= nf_row));
    }else{
        moves = moves.concat(moves_by_directions.se);
    }

    // south-west
    nearest_figure = getNearestFigure(moves_by_directions.sw, field, row, col);
    if (nearest_figure != null) {
        let nf_row = nearest_figure[0];
        let nf_col = nearest_figure[1];
        moves = moves
            .concat(moves_by_directions.sw
                .filter(([r, c]) => field[nf_row][nf_col].color === field[row][col].color ? r < nf_row : r <= nf_row));
    }else{
        moves = moves.concat(moves_by_directions.sw);
    }

    return moves;
}

function generateCombinations(array){
    let results = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            results.push([ array[i], array[j] ]);
        }
    }
    return results
}


// const to = [1, 3];
// avaibleMoves.find( ([x, y]) => x === to[0] && y === to[2] ) ? move(from, to) : cancel()

function contains_array(base_array, array_to_check){
    // function to check if array contains specific array
    for (let item of base_array){
        if (item.length !== array_to_check.length){
            continue;
        }
        let counter = 0;
        for (let i=0; i<array_to_check.length; i++){
            if (item[i] === array_to_check[i]){
                counter++;
            }
        }
        if (counter === array_to_check.length){
            return true;
        }
    }
    return false;
}
