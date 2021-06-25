document.getElementById("play-button").addEventListener("click", function () { 
    Game.startGame();
}); 

document.getElementById("submit btn").addEventListener("click", function () { 
    Game.gameOver();
}); 

document.addEventListener("DOMContentLoaded", function () { 
    User.getUsername(); 
});  


