class Game { 
    static startGame() { 
        console.log("STARTING GAME");
        let currentGame = new Game; 
        this.currentGame = currentGame 
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
                Game.gameOver(); 

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
            const arrayLetters = [ 
                ["A", "B", "C", "E"], 
                ["E", "D", "F", "U"], 
                ["N", "O", "J", "G"], 
                ["X", "Y", "U", "A"], 
                ["W", "S", "V", "Q"],
            ]; 
            let container = document.getElementById("game-section"); 
            for (let i of arrayLetters) {
                for (let j of i) { 
                    let cell = document.createElement("div"); 
                    cell.innerHTML = j; 
                    cell.className = "cell"; 
                    container.appendChild(cell);
                }
            }
        }

   static gameOver() {  
       let input =  document.querySelector("#input-box textarea").value.trim()
    //    let scoreObj = new Score(input)
        document.getElementById("input-box").classList.add("hidden")  
        let container = document.getElementById("game-section"); 
        container.innerText = ""
          
        
        // let userInput = document.getElementById('input-box').value  
        // fetch('https://example.com', {
        //     credentials: 'include'
        // });
        

        //BEfore the fetch to the backend we need:
        //1. The username of the user *I think i did this 
        //2. we need to find the Game object
        //3. We need to get the score points  
      
        Score.calculateFromAnswer(input)

        // IN THE BACKEND
        // 1. send the info to /users
        //2. First: find or create the user by the username received from the fetch call
        //3. create the user's game: game = user.games.create(answer: "whatevervaluewaspassedfromfetch")
        //4. create a new score object Score.create(total: , game_id: game.id)
    }  

   static displayHighScores() { 
        const scoreUrl = 'http://localhost:3000/scores/highscores'; 
        
        fetch(scoreUrl) 
            .then(response => response.json()) 
            .then(html => { 
                document.getElementById("highscores").innerHTML = html;
            })
       
    } 
    static fetch(username, total)
   

}  




