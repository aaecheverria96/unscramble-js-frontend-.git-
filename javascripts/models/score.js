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
               } else if (word.length < 4) { 
                total = 1 
            } 
            new Score(total)
        } 
    }
    static validateWord(word) { 
       const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}` 
       debugger
       fetch(url)
       .then(response => response.json()) 
       .then(json => { debugger 
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
        
        let rightLetters = flatten(arrayLetters) 

        if (input.split(" ").forEach(element => {
            element.includes(rightLetters)
        })) { 

        } else { 
            false 
        }
    }

}

