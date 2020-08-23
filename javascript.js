const getUserChoices = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock'|| userInput === 'paper' || userInput === 'scrissors'){
      return userInput
    } else {
      console.log('Error message')
    }
}

 function getComputerChoice(){
  let randomNumber= Math.floor(Math.random() * 3); 
  switch (randomNumber) {
      case 0:
          return 'rock';
          break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scrissors';
            break;
  } 
 }   
 function determineWinner(userChoice,computerChoice){
    if(userChoice === computerChoice){
        return 'This game was a tie'
    }
    if(userChoice === 'rock'){
       if(computerChoice === 'paper'){
        return 'Computer won';
       }else{
        return 'You won!';
       } 
    } 
    if(userChoice === 'paper'){
        if(computerChoice === 'scrissors' || 'rock'){
        return 'Computer won';
        }else{
        return 'You won!';
        }
    }
    if(userChoice === 'scrissors'){
        if(computerChoice === 'rock' || 'paper'){
            return 'Computer won';
        }else{
            return 'You won!';
        }
    }
 }
    const playGame = ()=> {
        const userChoice = getUserChoices('paper');
        const computerChoice = getComputerChoice();
            console.log('You threw:' + userChoice);
            console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice,computerChoice));
    }
    playGame()