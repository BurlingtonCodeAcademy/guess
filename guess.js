'use strict';

// NODE STUFF
function say(message) {
    console.log(message);
}

process.stdin.on('data', (chunk) => {
    handleInput(chunk.toString());
});

function exit() {
    process.exit();
}

say('I, the computer, will guess any whole integer number between 1 and 100.\n You can tell me H to say the number is higher than my guess.\n You can tell me L to say the number is lower than my guess.\n You can tell me I was correct by entering C');


