// constructor for score 
//will assign final score based on the length of the input (over four letters is 2 points) 
// constructor recieves the word and calculates final score 

class Score {
    constructor(wordSubmitted) {
        this.total = calculateFromAnswer(wordSubmitted)
    }

    calculateFromAnswer(word) {
        if (word.length >= 4 ) {
            return 2
        } else { 
            return 1 
        }
    }

}   