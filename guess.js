'use strict';
let guessCore = require('./guess-core.js')

global.say = function (message) {
    console.log(message);
}

global.exit = function() {
    process.exit(0);
}

function startListening() {
    process.stdin.on('data', (chunk) => {
        guessCore.handleInput(chunk.toString());
    });
}

say('I, the computer, will guess any whole integer number between 1 and 100.\n You can tell me H to say the number is higher than my guess.\n You can tell me L to say the number is lower than my guess.\n You can tell me I was correct by entering C');
guessCore.start();
startListening();
