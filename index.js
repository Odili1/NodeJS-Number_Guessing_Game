/*
      Number Guessing Game
1. There are 10 stages
2. Guess the number to enter the next stage
3. You have three trials in each stage
4. For each right guess, 3 points will be acquired
5. For each wrong guess, 1 point will be lost
*/

let userName = prompt('Input your Username:');
let range = 2;
let compNumber;
let score = 0;
let stage = 1;

startGame(stage, score, range);

function startGame(stage, score, range){
  
  let trials = 0;
  compNumber = Math.floor(Math.random()*range) + 1;
  
  alert(`Hi ${userName}. \nWelcome to stage ${stage}. \nScore: ${score}.`);
  
  let userNumber;
  while (userNumber != compNumber && trials < 3){
    
    userNumber = prompt(`Guess the number between 1 - ${range}:`);
  
    if (userNumber == compNumber){
      console.clear()
      alert(`You guessed right :)... The number is ${compNumber}`);
      score += 1;
      stage++;
      range++;
      nextStage(stage, score, range);
    }else if(userNumber < compNumber){
      console.clear();
      alert(`Number is too low :(... ${3-trials-1 != 1 ? 3-trials-1 + ' more chances' : 3-trials-1 + ' more chance'}. Try again!`);
      // score ? score -= 0.2 : score = 0;
      console.log(`Score: ${score}`);
    }else if(userNumber > compNumber){
      console.clear();
      alert(`Number is too high :(... ${3-trials-1 != 1 ? 3-trials-1 + ' more chances' : 3-trials-1 + ' more chance'}. Try again!`);
      // score ? score -= 0.2 : score = 0;
      console.log(`Score: ${score}`);
    }else{
      alert(`That is not a number...`)
    }

    trials++
    
  }
  console.clear()
  console.log(`You have exhausted your trials. \nScore ${score}`);
  
// if(confirm(`Play Again?`)){
//   startGame();
// }else{
//   endGame(score);
// }
}

function nextStage(stage, score, range){
  if(stage > 10){
    console.clear()
    console.log(`Congrations!!! You have completed all stages. \nYour score is ${score} `);
  }else{
    if(confirm(`\n\nCongrations!!! \nScore: ${score}\n\nNext Stage?`)){
      
      console.clear();
      startGame(stage, score, range)
    }else{
      endGame(score)
    }
  }
}

function endGame(score){
  console.clear();
  alert(`Game end. \nScore ${score}`)
}