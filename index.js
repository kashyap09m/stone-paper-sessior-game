//Generating Random Number
var randomNo1 = Math.floor(Math.random() * 3) + 1;
var randomNo2 = Math.floor(Math.random() * 3) + 1;

//Chaging image depending upon dice number

    //1.1 For Player 1
if(randomNo1 == 1){
    document.getElementsByClassName("img1")[0].src = "stone.png";
}
else if(randomNo1 == 2){
    document.getElementsByClassName("img1")[0].src = "paper.png";
}
else if(randomNo1 == 3){
    document.getElementsByClassName("img1")[0].src = "sessiors.png";
}

    //For Player 2
if(randomNo2 == 1){
    document.getElementsByClassName("img2")[0].src = "stone.png";
}
else if(randomNo2 == 2){
    document.getElementsByClassName("img2")[0].src = "paper.png";
}
else if(randomNo2 == 3){
    document.getElementsByClassName("img2")[0].src = "sessiors.png";
}

//Changing text depending upon which player wins
if((randomNo1 == 1 & randomNo2 == 3) || (randomNo1 == 2 & randomNo2 == 1) || (randomNo1 == 3 & randomNo2 == 2))
    document.querySelector("h2").innerText = "Player 1 Wins";

else if((randomNo2 == 1 & randomNo1 == 3) || (randomNo2 == 2 & randomNo1 == 1) || (randomNo2 == 3 & randomNo1 == 2))
    document.querySelector("h2").innerText = "Player 2 Wins";

else //randomNo1==randomNo2
    document.querySelector("h2").innerText = "It's a Tie, plz refresh";