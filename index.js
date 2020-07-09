
function button () {

    const randomNumber1 = Math.floor((Math.random() * 6) +1); //picks a number 1-6

    const randomNumber2 = Math.floor((Math.random() * 6) +1); //picks a number 1-6


    document.getElementById("img1").src = "images\\dice" + randomNumber1 + '.png';

    document.getElementById("img2").src = "images\\dice" + randomNumber1 + '.png';


//IF PLAYER one wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = ("🚩 Player 1 wins!");
    }

//If player two wins
    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = ("Player 2 wins! 🚩");
    }

//If it's a draw
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = ("It's a draw!");
    }
}
