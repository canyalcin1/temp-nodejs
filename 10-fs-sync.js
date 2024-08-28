
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/resultSYNC.txt', `Here is the result of these text files ${first}, ${second}`,{ flag : 'a'});



