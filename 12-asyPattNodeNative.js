//using the node's native option in this code

const { readFile, writeFile } = require("fs");
//{instead of importing util module, just add .promises at the end of fs module import and change the promise calls to readFile and writeFile}

// const {readFile, writeFile} = require("fs").promises

const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)



const begin = async () => {
  try {
    const first = await readFilePromise("./files/first.txt", "utf-8");
    const second = await readFilePromise("./files/result-async.txt", "utf-8");

    // writing into a file 
    await writeFilePromise('./files/fourth.txt', `New Content added: 
    ${first}
    ${second}`, {flag: 'a'})  //flag - a (append into)
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

begin();

//uneccesary method, don't use this - use async - await
