// constructor for score 
//will assign final score based on the length of the input (over four letters is 2 points) 
// constructor recieves the word and calculates final score 

class Score {
    constructor(total) {
        this.total = total 
    }

    static calculateFromAnswer(word) {
        if  (this.validLetters && this.validateWord(word)){
            const total = 0
           if (word.length >= 4 ) {
                total = 2
               } else if() { 
                total = 1 
            } 
            new Score(total)
        } 
    }
    static validateWord(word) { 
       const url = `https://wordsapiv1.p.mashape.com/words/${word}/definitions`  
       debugger 
       fetch(url)
       .then(response => response.json()) 
       .then(json => {debugger // if in the response a definition exists than return true if not then else false}) 
    }) 
       
    } 
    static validLetters() {
        
    }
}   

