/* Mixed Messages - Project for Codecademy

For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, 
inspirational message, or nonsensical jokes. To make your program truly random, 
the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
*/

// Variables

const phrase1 = [
    'Have this on my desk by 9am.\n',
    'Courier the deck, no doorbells.\n',
    'Lets give it another turn and see where we end up.\n',
    'Can you change the range to 1000 - 1500 instead of 3000 - 3500 please.\n'
];

const phrase2 = [
    'Have a nice weekend.\n',
    'Make sure the work is zero defect before you share.\n',
    'Pls align the fonts it looks off.\n',
    'Check with Nick before you share with the client.\n'
];

const phrase3 = [
    'Thx,',
    'Pls fix,',
    'BR,',
    'Best,'
]

// Functions

function mdFactory(arr) {
    return {
        greeting: 'Team,\n',
        phrase1: phrase1[arr[0]],
        phrase2: phrase2[arr[1]],
        phrase3: phrase3[arr[2]],

        printMessage() {
            console.log(`
            ${this.greeting}
            ${this.phrase1}
            ${this.phrase2}
            ${this.phrase3}`);
        },
    }
}

function selectPos() {
    return [0,0,0].map(elem => Math.floor(Math.random() * 3));
}

// Main

const phrase = mdFactory(selectPos());
phrase.printMessage();