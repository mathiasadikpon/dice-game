function rollDice() {
  let goldCoins = 0;
  let roll;
  for (let i = 0; i < 10; i++) {
    roll = Math.floor(Math.random() * 6) + 1; // roll dice between 1 to 6 inclusive ( [1 6])
    alert("You roll a " + roll + ".");
    if (roll === 1) {
      alert("Game over, no more rolls!");
      break;
    }
    if (roll < 4) {
      continue;
    }
    if (roll === 4) {
      if (goldCoins > 0) {
        goldCoins -= 1;
        alert("Sorry, you loss 1 gold coin!");
      } else {
        alert(
          "Sorry, you loss 1 gold coin, but we were not able to deduce it because you have " +
            goldCoins +
            " gold coin!"
        );
      }
      alert("You have won a total of " + goldCoins + " gold coins!");
      continue;
    }

    goldCoins += roll;
    alert("You have won a total of " + goldCoins + " gold coins!"); // every win toss
  }

  //when the last dice is not 6, then we need to display the total;
  if (![4, 6].includes(roll)) {
    alert("You have won a total of " + goldCoins + " gold coins!");
  }
}
