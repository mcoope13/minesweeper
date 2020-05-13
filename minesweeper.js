const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const row = [];
       for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(' ');
        } 
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const row = [];
       for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(null);
        } 
        board.push(row);
    } 
    
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        const randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    } 
    
    return board; 
};

const printBoard = board => { 
    console.log(board.map(row => row.join(' | ')).join('\n')); 
};


const playerBoard = generatePlayerBoard(4, 3);
const bombBoard = generateBombBoard(4, 3, 4);
printBoard(playerBoard);
printBoard(bombBoard);