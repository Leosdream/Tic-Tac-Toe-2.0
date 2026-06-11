const Gameboard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""];
    const getBoard = () => board;
    const resetBoard= () => board.fill("");
    const place = function(i, marker){
        board[i] = marker;}
    return {getBoard,place, resetBoard}
})(); 

function createPlayer(name, marker) {
  return {name, marker};
}

const GamePvP = (function () {
    const PlayerOne= createPlayer("Leo", 1);
    const PlayerTwo= createPlayer("Edy", 2);
    let currentPlayer = PlayerOne;

    function CheckWinner(){
        const winningCombinations = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
        ];
    const board = Gameboard.getBoard();

    for (let i = 0; i < winningCombinations.length; i++) {
    if(board[winningCombinations[i][0]]!="" &&board[winningCombinations[i][0]]===board[winningCombinations[i][1]] && board[winningCombinations[i][1]]===board[winningCombinations[i][2]]){
    return true;}};
    };
    function playRound(i){
        Gameboard.place(i, currentPlayer.marker);
        if(currentPlayer===PlayerOne){currentPlayer=PlayerTwo;}
        else{currentPlayer=PlayerOne;}
        if(CheckWinner()===true){console.log("winner")} //////winner
        console.log(Gameboard.getBoard());
    }

    return {playRound}
})(); 





