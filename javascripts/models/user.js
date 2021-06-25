class User { 
    constructor(username) { 
        this.username = username; // this.username = prompt("Enter Username")
    } 
   
    static getUsername() { 
     let myUsername = prompt("Enter Username") 
      User.fetchUser(myUsername); 
    } 

    static fetchUser(username){ 
      const newUserUrl = 'http://localhost:3000/users' 
      fetch(newUserUrl, { 
       method: 'POST', 
       headers: { 
        'Content-Type': 'application/json'
       },
      body: JSON.stringify({user: {username}})
      }) 
      .then(response => response.json()) 
      .then(json => { 
        new User(json.username) 
        new Game(json.games).forEach(game => {
          console.log(game)
        });
        new Score(json.scores).forEach(score => {
          console.log(score)
        });
        //make a new user passing the username in there new User(json.) 
        //for each game in the json.games create a new game object new Game() 
        //for each score in json.scores create a new score object 
         
      }) 
    }  
    
    findUserGames(username) { 

    }

    //create a function called find user games 
    //create a function that searches through games for the scores filters by game_id for each user game 
    

      
    
}     