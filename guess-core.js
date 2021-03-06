
let originalRandomNumber;
let lastGuess;
let maxGuess;
let minGuess;

function start() {
    originalRandomNumber = getRandomInt(1, 100);
    say("Please think of a number between 1 and 100.")

    lastGuess = originalRandomNumber;
    maxGuess = 100;
    minGuess = 1;
    makeGuess(originalRandomNumber);
}

function makeGuess(guess) {
    say('Is your number ' + guess + '?');
}

function handleInput(input) {
    input = input.trim().toUpperCase();
    say('user input: ' + input);
    if (input === 'H') {
        minGuess = lastGuess;
        lastGuess = getRandomInt(minGuess, maxGuess);
        makeGuess(lastGuess)
    }
    else if (input == 'L') {
        maxGuess = lastGuess;
        lastGuess = getRandomInt(minGuess, maxGuess);
        makeGuess(lastGuess)
    }
    else if (input == 'C') {
        say(`🎉 I know the answer! Your number is (${lastGuess}). 🎉`);
        exit();
    }
    else {
        say('Invalid input, try again (valid input: L for lower, H for higher or C for correct)');
    }
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max-min));
}

module.exports = {
    handleInput: handleInput,
    getRandomInt: getRandomInt,
    start: start
}
