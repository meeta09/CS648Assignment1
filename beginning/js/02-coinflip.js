var coinFlip = Math.round(Math.random());
var choice = window.prompt("Would you like heads or tails?");

if (coinFlip) { //HEADS
    if (choice === "heads") {
        window.alert("The flip was heads and you chose heads...you win!");
    }
    else {
        window.alert("The flip was heads and you chose tails...you lose!");
    }
}
else { //TAILS
    if (choice === "heads") {
        window.alert("The flip was tails and you chose heads...you lose!");
    }
    else {
        window.alert("The flip was tails and you chose tails...you win!");
    }
}