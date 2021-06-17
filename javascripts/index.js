// const submitButton = () => document.querySelector("#submit btn")
// const input = () => document.querySelector("#input-box")

document.getElementById("play-button").addEventListener("click", function () { 
    Game.startGame();
}); 

const handleClick = (e) => {
    // const answer = input().value  
   Game.gameOver()
}

// document.addEventListener("DOMContentLoaded", () => { 
//     submitButton().addEventListener("click", handleClick)
// })

document.getElementById("submit btn").addEventListener("click", function () { 
    Game.gameOver();
}); 