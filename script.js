const Gameboard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""];
    const getBoard = () => board;
    const resetBoard= function (){
        board.fill("")
        const btn = document.querySelectorAll(".btn");
         for(let i=0;i<btn.length;i++){
            btn[i].textContent="";}
            GamePvP.resetCurrentPlayer();
    }

    const place = function(i, marker){
        board[i] = marker;}

        const Leobtn= document.querySelector(".reset")
Leobtn.addEventListener("click", () => {
    Gameboard.resetBoard();
    GamePvP.resetCurrentPlayer();})

    return {getBoard,place, resetBoard}
})(); 




function createPlayer(name, marker) {
  return {name, marker};
}

const GamePvP = (function () {
    const PlayerOne= createPlayer("X Player", 1);
    const PlayerTwo= createPlayer("O Player", 2);
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
    return true;}

};
    };

    const btn = document.querySelectorAll(".btn");
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click', (event) => {
            const Value = event.target.dataset.index;
            if(CheckWinner()!==true && Gameboard.getBoard()[Value]===""){
                GamePvP.playRound(Value);
                turn.textContent="It's "+currentPlayer.name+"'s turn";
                const clickedElement = event.target;
                if(currentPlayer===PlayerTwo){clickedElement.textContent = "X";}
                    else{clickedElement.textContent = "O";}
                   
    }});

}

const resetCurrentPlayer = (function () {
    currentPlayer = PlayerOne;
turn.textContent="It's "+currentPlayer.name+"'s turn";})

const turn = document.querySelector(".turn");
const resetBtn= document.createElement("button");
resetBtn.className="resetBtn";
const win = document.querySelector("dialog");
 const closeButton = document.querySelector("dialog button");
 const winnerDiv= document.querySelector(".winnerDiv");
closeButton.addEventListener("click", () => {
                dialog.close();})
                win.appendChild(resetBtn)
                resetBtn.textContent="Reset";
resetBtn.addEventListener("click", () => {
                Gameboard.resetBoard();
                GamePvP.resetCurrentPlayer();
                win.close();})

    function playRound(i){
        if(Gameboard.getBoard()[i]===""){
        Gameboard.place(i, currentPlayer.marker);
        console.log(currentPlayer);
        if(CheckWinner()===true){console.log("winner")
                winnerDiv.textContent="Winner is: "+currentPlayer.name;
                win.showModal();
                ;} 

        if(currentPlayer===PlayerOne){currentPlayer=PlayerTwo;}
        else{currentPlayer=PlayerOne;}}

        if(Gameboard.getBoard().includes("")===false && CheckWinner()!==true){
            winnerDiv.textContent="It's a draw";
                win.showModal();
        }
        console.log(Gameboard.getBoard());
    }

    return {playRound, resetCurrentPlayer}
})(); 
