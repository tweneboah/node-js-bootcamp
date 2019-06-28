
const fs = require('fs')



///////////////////////////////
//      File System

fs.readFile('./txt/start.txt', 'utf-8',(err, data) => {
  console.log(data)
})

