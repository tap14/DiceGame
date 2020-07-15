// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
  player1 = prompt("Change Name of First Player");
  player2 = prompt("Change Name of Second Player");

  document.querySelector("p.Player1")
    .innerHTML = player1;

  document.querySelector("p.Player2")
    .innerHTML = player2;
}

function dice_game() {
  var randomnumber1 = Math.floor(Math.random() * 6) + 1;

  var diceImg_1 = "dice" + randomnumber1 + ".png";

  var randomImgSource = "images/" + diceImg_1;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImgSource);


  var randomnumber2 = Math.floor(Math.random() * 6) + 1;

  var diceImg_1 = "dice" + randomnumber2 + ".png";

  var randomImgSource = "images/" + diceImg_1;

  var image1 = document.querySelectorAll("img")[1];

  image1.setAttribute("src", randomImgSource);

  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = (player1 + " Wins");
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = (player2 + " Wins");
  } else {
    document.querySelector("h1").innerHTML = "Draw"
  }
}
