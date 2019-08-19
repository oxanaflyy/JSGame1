var grantHealth = 10;
var userHealth = 40;
var userWin = 0;
var grantWin = 0;
var Name;

startGame();

function startGame(){
  var playing = prompt("Do you want to play?");
  if (playing.toLocaleLowerCase() === "yes"){
    Name = prompt("What is your name?");
    startCombat();
  } else {
    console.log("Try again");
  }
}

function startCombat() {
while (userWin <= 3 && grantWin !== 1) {
  var attacking = prompt("Would you like to attack or quit?");
  if (attacking.toLocaleLowerCase() === "attack") {
    if (userHealth <= 0){
      grantWin++;
      console.log ("Grant has won!");
    } else if (grantHealth >= 1 && userHealth >= 1) {
    userHealth -= getDamage();
    grantHealth -= getDamage();
    console.log(Name + " has " + userHealth + " health left.");
    console.log("Grant has " + grantHealth + " health left.");
  } else {
    console.log("You have quit the game!");
    break;
  }}
  }
}

if (userWin === 3) {
  console.log(Name + " has won!");
} 

function getDamage() {
  return Math.floor(Math.random()*5 +1);
}