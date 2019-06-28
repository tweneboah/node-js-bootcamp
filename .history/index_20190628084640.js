
const fs = require('fs')



///////////////////////////////
//      File System

fs.readFile('./txt/start.txt', 'u',(err, data) => {
  console.log(data)
})

