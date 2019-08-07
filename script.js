var grantHealth = 10;
var userHealth = 40;
var userWin = 0;
var grantWin = 0;
var question = prompt("Do you want to play?");

if (question === "Yes" || question === "yes") {
  var name = prompt("What is your name?");
}

while (userWin < 3 && grantWin !== 1) {
  var userDamage = Math.floor(Math.random() * 2) + 1;
  var grantDamage = Math.floor(Math.random() * 2) + 1;
  if (userHealth >= 0 && grantHealth >= 0) {
    userHealth -= userDamage;
    grantHealth -= grantDamage;
    console.log(name + " has " + userHealth + " health left.");
    console.log("Grant has " + grantHealth + " health left.");
  } else if (userHealth <= 0) {
    grantWin++;
    console.log("Grant has won!");
  } else if (grantHealth <= 0) {
    userWin++;
    grantHealth = 10;
  }
}

if (userWin === 3) {
  console.log(name + " has won!");
} else if(grantWin===1) {
  console.log("Grant has won!");
}