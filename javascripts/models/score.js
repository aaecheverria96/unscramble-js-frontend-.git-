// constructor for score 
//will assign final score based on the length of the input (over four letters is 2 points) 
// constructor recieves the word and calculates final score 

class Score {
    constructor(total) {
        this.total = total 
    }

    static calculateFromAnswer(input) { 
      
        if  (this.validateLetters(input) && this.validateWord(input)){
            const total = 0
           if (input.length >= 4 ) {
                total = 2
               } else if (input.length < 4) { 
                total = 1 
            } else if (input.length === 0) { 
              total = 0
            }
            new Score(total)
        } 

    }
    static validateWord(input) { 
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}` 
      fetch(url) 
      
      .then(response => response.json()) 
      .then(json => { 
        debugger 
        if (json.title === "No Definitions Found") {
          return false 
        } else { 
          return true 
          
        }
      }) 
  
       
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
 
