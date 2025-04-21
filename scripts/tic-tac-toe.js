const TicTacToe = () => {
    // 8 = empty
    const board = [
        [8, 8, 8],
        [8, 8, 8],
        [8, 8, 8]
    ];
    let turn = 1;


    const place = (x, y, player) => {
        if (board[x][y] === 8 && turn === player) {

            board[x][y] = player; 
            console.log(`Player #${player} placed at (${x}, ${y})`);

            if (checkWin(player)) {
                console.log(`Player ${player} wins!`);
            } else {
                turn = turn === 1 ? 0 : 1; 
                console.log(`It is now player ${turn}'s turn!`)
            }

        } else if (turn !== player) {
            console.log("Not your turn. Try again.");
        } else {
            console.log("Invalid move. Try again.");
        }
    };


    const checkWin = (player) => {
        const winPatterns = [
            // x-axis
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][1], board[1][2]],
            [board[2][0], board[2][1], board[2][2]],
            // y-axis
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],
            // diagonal
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ];

        return winPatterns.some(pattern => pattern.every(cell => cell === player));
    };


    const displayToDOM = () => {
        
    };


    const printBoard = () => {
        console.log(board.map(row => row.join(" ")).join("\n"));
    };


    return { place, printBoard };
};



// Example usage
const game = TicTacToe();
game.printBoard();