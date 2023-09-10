const {readFileSync, writeFileSync} = require('fs')  //object destructuring from the fs module

const first = readFileSync('./files/first.txt', 'utf-8')
const second = readFileSync('./files/second.txt', 'utf-8')

console.log(first , second)


writeFileSync('./files/writeFile.txt' , `new content is here  ${first}, ${second}`, {flag: 'a'});
//flag a means append the content in the new file instead of overwriting it
