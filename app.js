const {readFile} = require('fs')

//using promise instead of a callback for reading files

const obtainText = (path) =>{
  return new Promise((reject, resolve) => {
    readFile(path, 'utf-8', (err, content) => {
      if(err)
        reject(err)
      else{
        resolve(content)
      }
    })
  } ) 
}


const begin = async () => {
  try{
    const first = await obtainText('./files/first.txt')
    const second = await obtainText('./files/second.txt')
    console.log(`${first}, ${second}`);
  }
  catch(error){
    console.log(error)
  }
 
}
begin()


//uneccesary method, don't use this - use async - await
// obtainText('./files/second.txt')
// .then(displayData => console.log(displayData))
// .catch(err => console.log(err))