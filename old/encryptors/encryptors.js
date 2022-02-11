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

function shiftedKey(shift){
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const shifted = [...alpha];
    const key = {};
    Array.from({length: shift}, () => {
        shifted.push(shifted.shift());
    });
    for (let i = 0; i < alpha.length; i++) {
        key[alpha[i]] = shifted[i];
    };
    return key;
}

function caesarCypher(message, shift) {
    const key = shiftedKey(shift);

    return message.toLowerCase().split('').map(elem => {
        return key[elem] ? key[elem]: elem;
    }).join('');

}

function symbolCypher(str){
	const symbols = {
    'i': '!',
    '!': 'i',
    'l': '1',
    '1': 'l',
    's': '$',
    '$': 's',
    'o': '0',
    '0': 'o',
    'a': '@',
    '@': 'a',
    'e': '3',
    '3': 'e',
    'b': '6',
    '6': 'b'
  }

  let output = '';
  for (let i = 0; i < str.length; i++) {
    let char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char]
    } else {
      output += char;
    }
  }
  return output;
}

function reverseCypher(message){
    return message.split(' ').map(elem => elem.split('').reverse().join('')).join(' ');
    //arr.map(elem => elem.split().sort((a, b) => b - a).join());
}

module.exports.shiftedKey = shiftedKey;
module.exports.caesarCypher = caesarCypher;
module.exports.symbolCypher = symbolCypher;
module.exports.reverseCypher = reverseCypher;