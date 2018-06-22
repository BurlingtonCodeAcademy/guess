'use strict'

let say = function (string) {
    console.log(string);
    let output = document.querySelector('#output p');
    console.log(output);
    output.innerHTML += '<br>' + string + '<br>';
}

let originalRandomNumber = getRandomInt(1, 100);
let lastGuess = originalRandomNumber;
let maxGuess = 100;
let minGuess = 1;


let handleInput = function (rawInput) {

    let input = rawInput.toString().trim().toUpperCase();

    if (input === 'H') {

        //handle higher guess
        minGuess = lastGuess
        lastGuess = getRandomInt(minGuess, maxGuess)
        say('Is your number ' + lastGuess + '?')

    } else if (input == 'L') {

        //handle lower guess
        maxGuess = lastGuess
        lastGuess = getRandomInt(minGuess, maxGuess)
        say('Is your number ' + lastGuess + '?')

    } else if (input == 'C') {

        say(`🎉 I know the answer! Your number is <b>${lastGuess}</b>. 🎉`)

    } else {
        say('Invalid input, try again (valid input: L for lower, H for higher or C for correct)')
    }

}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max-min));
}
