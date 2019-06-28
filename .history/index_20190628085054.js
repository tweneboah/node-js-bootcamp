
const fs = require('fs')



///////////////////////////////
//      File System

//Node is all about callback. The code below says when the system,
//finish reading the text on the file then run the results, which is the data argument


//
fs.readFile('./txt/start.txt', 'utf-8',(err, data) => {
  console.log(data)
})

