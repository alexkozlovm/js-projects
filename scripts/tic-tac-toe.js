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
                alert(`Player ${player} wins!`)
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
    let turnLocal = 1;
    const updateCell = (x,y) => {
        const cellIndex = x * 3 + y; 
        
        turnLocal = turnLocal === 1 ? 0 : 1; 

        let turnMap = new Map();
        turnMap.set(0,"X")
        turnMap.set(1,"O")

        const one = document.querySelector(".a" + cellIndex.toString());
        one.innerHTML = turnMap.get(turnLocal);
        printBoard();
    };

    const renderBoard = () => {
            
        const tableBody = document.querySelector("#tic-tac-toe-table");
        tableBody.innerHTML = ""; 
    
        let i = 0;
        board.forEach((row, rowIndex) => {
            const tableRow = document.createElement("tr");

    
            row.forEach((cell, colIndex) => {
                const tableCell = document.createElement("td");
                tableCell.textContent = cell === 8 ? i : cell; 
                tableCell.classList =  "a" + i.toString();
                tableCell.addEventListener("click", () => place(rowIndex, colIndex, turn)); 
                tableCell.addEventListener("click", () => updateCell(rowIndex, colIndex));
                tableRow.appendChild(tableCell);
                i++ 
            });
    
            tableBody.appendChild(tableRow);
        });

    };


    const printBoard = () => console.log(board.map(row => row.join(" ")).join("\n"));
    return { place, printBoard, renderBoard };
};


// Example usage
const game = TicTacToe();
game.renderBoard();