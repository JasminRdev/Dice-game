
var randomNumber1 = Math.floor(Math.random()* 6)+1; //randomNum

var randomDice1= "images/dice" + randomNumber1 + ".png" //combine it with dice to choose random dice num

var img1 = document.querySelectorAll ("img")[0]; //select attribute
img1.setAttribute("src", randomDice1); //set new attribute


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


if(randomDice1 > randomDice2)
{document.querySelector("h1").innerHTML= "🚩 Player 1 wins";}

else if (randomDice2 > randomDice1) {
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}

else {
  document.querySelector("h1").innerHTML="Draw";}
