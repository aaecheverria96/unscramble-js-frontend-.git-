class Game { 
    static startGame() {
        console.log("STARTING GAME");
        let currentGame = new Game; 
        currentGame.displayGame()  
        console.log(document.getElementById("input-box"))
        document.getElementById("input-box").classList.remove("hidden") 
         

        var timeleft = 10; 
        countDownEl.innerHTML = `00:${timeleft}`; 
       currentGame.setIntervalX(currentGame.updateCountdown, 1000, timeleft);
        //timer should start one second after game starts and end at 0 seconds or submit 
        
    } 


    setIntervalX(callback, delay, repetitions) { 
        let game = this 
        let x = 0; 
        let intervalID = setInterval(function (){ 
            callback() 
            if (++x === repetitions) { 
                clearInterval(intervalID); 
                game.gameOver(); 

            // invoke a gameOverfunction (defined in game class Game.gameOver). Step 1) Save the input value then remove input from the page 
            // step2) validate input/answer use fetch call to API called "words api" 20500 requests per day 
                setTimeout(()=> countDownEl.innerText = "",3000); 
            } 
        }, delay);
    }

    updateCountdown() { 
    
    
        let updatedSeconds = parseInt(countDownEl.innerText.slice(-2)) - 1 
        let timer = ""
        if(updatedSeconds === 0) { 
            countDownEl.innerHTML = "Time is up!" 
            return 
        }  else if (updatedSeconds < 10) { 
            timer = `00:0${updatedSeconds}`
        } else { 
            timer = `00:${updatedSeconds}`
        }
        countDownEl.innerHTML = timer 
    } 




    displayGame() { 
        

        // document.getElementById("gameboard").innerText = arrayLetters.forEach(i => { 
        //     let div = document.createElement("div") 
        //     let p = document.createElement("p") 
        //     div.append(`${i}`,p)

        // }); 
        // for each letter build the tag that i need to append on the page and then append it (span or paragraph tags) 
        // 9 or 16 within the tiles. append it to the page (scrabl) https://cssgridgarden.com/ scrabble style 
        //use grid for styling to add x tiles to each row 
        //input field should appear to type answer 
    } 

    gameOver() {  
        document.getElementById("input-box").classList.add("hidden") 
    //    let userInput = document.getElementById('input-box').value 
       
        document.getElementById('submit btn').addEventListener("click")


    }  

    validWord() { 

    }

} 




