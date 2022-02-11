/*
node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]
Here are some examples of running this program:

$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
 
$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> olleh dlrow
*/

function caesarCypher(message, shift) {

}

function symbolCypher(message){

}

function reverseCypher(message){
    return message.split(' ').reverse();
    //arr.map(elem => elem.split().sort((a, b) => b - a).join());
}

let test = 'A test sentence for encoding';
console.log(reverseCypher(test));