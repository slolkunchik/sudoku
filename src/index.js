module.exports = function solveSudoku(matrix) {
    function isGood(matrix, x, y, key) {
        for (let i = 0; i < 9; i++) {
            const squareX = 3 * Math.floor(x / 3) + Math.floor(i / 3); //range for three row in square
            const squareY = 3 * Math.floor(y / 3) + i % 3; //range for three columns in square
            if (matrix[x][i] === key || matrix[i][y] === key || matrix[squareX][squareY] === key) { //search in row, then in col, then in square
                return false; //this number is present, not suitable
            }
        }
        return true; //can try this number
    }

    function backtracking(matrix) {
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                if (matrix[x][y] === 0) {
                    for (let key = 1; key <= 9; key++) { //number for insert
                        if (isGood(matrix, x, y, key)) {
                            matrix[x][y] = key; //pushed trying number in matrix
                            if (backtracking(matrix)) { //recursion with matrix after pushed k
                                return true;
                            }
                            matrix[x][y] = 0; //if k isn't fit
                        }
                    }
                    return false; //if matrix[x][y] === 0 is true, but function isGood return false for all variants
                }
            }
        }
        return true; //cycle completed, return to line 30
    }
    backtracking(matrix);
    return matrix;
}






