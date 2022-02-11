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

const {caesarCypher, symbolCypher, reverseCypher} = require('./encryptors.js');

const encryptor = process.argv[2];
const caesar = process.argv[3];



switch (encryptor) {
	case 'caesar':


}

