'use strict'

function say(message) {
    console.log(message);
}

say('I, the computer, will guess any whole integer number between 1 and 100.\n You can tell me H to say the number is higher than my guess.\n You can tell me L to say the number is lower than my guess.\n You can tell me I was correct by entering C');

let originalRandomNumber = getRandomInt(1, 100);
let lastGuess = originalRandomNumber;
let maxGuess = 100;
let minGuess = 1;

say('Is your number ' + originalRandomNumber + '?')

process.stdin.on('data', (chunk) => {
    handleInput(chunk.toString());
});

function handleInput(input) {
    let input = input.trim().toUpperCase();
    say('user input: ' + input);
    if (input === 'H') {
        //handle higher guess
        minGuess = lastGuess;
        lastGuess = getRandomInt(minGuess, maxGuess);
        say('Is your number ' + lastGuess + '?');
    }
    else if (input == 'L') {
        //handle lower guess
        maxGuess = lastGuess;
        lastGuess = getRandomInt(minGuess, maxGuess);
        say('Is your number ' + lastGuess + '?');
    }
    else if (input == 'C') {
        say(`🎉 I know the answer! Your number is (${lastGuess}). 🎉`);
        process.exit();
    }
    else {
        say('Invalid input, try again (valid input: L for lower, H for higher or C for correct)');
    }
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max-min));
}