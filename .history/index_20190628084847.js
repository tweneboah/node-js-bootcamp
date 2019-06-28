
const fs = require('fs')



///////////////////////////////
//      File System

//Node is all about callback. The code below sa
fs.readFile('./txt/input.txt', 'utf-8',(err, data) => {
  console.log(data)
})

