const {readFile} = require('fs')

console.log('first task')

readFile('./files/first.txt', 'utf-8' ,(err, result) => {
  if(err)
    console.log(err)
  else{
    console.log(result)
    console.log("second task")
  }
})

const greetings =(name) => {  console.log(`Greetings, ${name}`)
}

// setTimeout(() => {
//   console.log('timer working')
// }, 2000)

greetings("J")