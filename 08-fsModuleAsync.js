const {readFile, writeFile} = require('fs')

readFile('./files/first.txt', 'utf-8', (err, result) => {
  if(err)
    console.log(err)
  else{
    console.log(result)
    const first = result;
    readFile('./files/second.txt', 'utf-8', (err, result) => {
      if(err)
        console.log(err)
      else{
        console.log(result)
        const second = result;
        writeFile('./files/result-async.txt', 'Newly formed text file created asynchronously', (err, result)=> {
            if(err)
              console.log(err)
            else{
              console.log(result)
            }
        })
      }
    })
  }
})