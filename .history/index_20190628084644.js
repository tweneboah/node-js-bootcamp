
const fs = require('fs')



///////////////////////////////
//      File System

fs.readFile('./txt/start.txt', 'utf-',(err, data) => {
  console.log(data)
})

