const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') return userInput;
  else console.log(`Error!`);
};
getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random()*3);
  switch (computerChoice) {
    case 0 : return 'rock'; break;
    case 1 : return 'paper'; break;
    case 2 : return 'scissors'; break;
  };};
//console.log(getUserChoice('RoCk'));
//console.log(getComputerChoice());
//getComputerChoice
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') console.log(`BAM! User WON!`)
 else if (userChoice === computerChoice) console.log(`It's a tie!`)
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') console.log('Computer won!')
    else console.log('User won!')
  }
 else if (userChoice === 'paper')  {
    if (computerChoice === 'scissors') console.log('Computer won!')
    else console.log('User won!')
  }
 else if (userChoice === 'scissors')  {
    if (computerChoice === 'rock') console.log('Computer won!')
    else console.log('User won!')
  }
};
const playGame = () => {
  let userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  console.log(`User chose: ${userChoice}  \nComputer chose: ${computerChoice}`);
  determineWinner(userChoice, computerChoice);
};
playGame();
