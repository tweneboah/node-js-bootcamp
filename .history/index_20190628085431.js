
const fs = require('fs')



///////////////////////////////
//      File System

//Node is all about callback. The code below says when the system,
//finish reading the text on the file then run the results, which is the data argument


//Reading text from a file
fs.readFile('./txt/start.txt', 'utf-8',(err, data1) => {
  console.log(data)
  fs.readFile('./txt/start.txt', 'utf-8',(err, data) => {
   console.log(data)
 })
})

console.log('Checking')

