// constructor for score 
//will assign final score based on the length of the input (over four letters is 2 points) 
// constructor recieves the word and calculates final score 

class Score {
    constructor(total, game_id) {
        this.total = total 
        this.game_id = game_id 
    }

    static calculateFromAnswer(input) { 
      debugger
      if (input.length === 0) { 
        const p = document.createElement("p") 
        p.innerText = "your score is 0"
        document.getElementById("countdown").insertAdjacentElement("afterbegin", p) 
        return null 
      }
      let total = 0
      if  (this.validateLetters(input) && this.validateWord(input)){
      if (input.length >= 4 ) {
                total = 2
               } else if (input.length < 4) { 
                total = 1 
            } 
            //debugger 
            const score = new Score(total)  
            Game.postfetchGame(); 
            const p = document.createElement("p") 
        p.innerText = `your score is ${total}`
        document.getElementById("countdown").insertAdjacentElement("afterbegin", p)
        } 
        else { 
          const p = document.createElement("p") 
        p.innerText = "Invalid input"
        document.getElementById("countdown").insertAdjacentElement("afterbegin", p) 
        return null 
        }

    }
    static validateWord(input) {  
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}` 
      
      fetch(url) 
      .then(response => response.json()) 
      .then(json => {         
        if (json.title === "No Definitions Found") {
          return false 
        } else { 
          debugger 
          return true 
          
        }
      }) 
      .catch(error => console.log(error))
       
    }  
    

    static validateLetters(input) { 
      const arrayLetters = [
        ["A", "B", "C", "E"],
        ["E", "D", "F", "U"],
        ["N", "O", "J", "G"],
        ["X", "Y", "U", "A"],
        ["W", "S", "V", "Q"],
      ]; 
      
      let rightLetters = arrayLetters.flat()
      
      input.split("").forEach(letter => { 
        if (rightLetters.includes(letter.toUpperCase())) { 
          const index = rightLetters.findIndex(l => l === letter) 
          rightLetters.splice(index, 1)
        } else { 
          return false 
        } 
      }); 
      return true 
    } 

    recentScore(){ 
      const userUrl = 'http://localhost:3000/users'  
      fetch(userUrl) 
      .then(response => response.json()) 
      .then(json => { 
        json.scores //is there a like .recent method i can use? 
      });
    }
    
}
 
