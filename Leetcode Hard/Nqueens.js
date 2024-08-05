//Solve the "N-Queens" problem on LeetCode.
// • Write a function that places n queens on an xn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens
//   puzzle.
// • Log the distinct solutions for a few test cases.

function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // Check the left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        // Check the right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // Place the queen
                backtrack(row + 1);    // Move to the next row
                board[row][col] = '.'; // Remove the queen (backtrack)
            }
        }
    }

    backtrack(0);
    return results;
}

// Test cases
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // Output: [["Q"]]
console.log(solveNQueens(2)); // Output: [] (No solutions)
console.log(solveNQueens(3)); // Output: [] (No solutions)
