
const fs = require('fs')



///////////////////////////////
//      File System

//Node is all about callback. The code below says when the system,
//finish reading the text on the file then run the results, which is the data argument


//Reading text from a file
fs.readFile('./txt/start.txt', 'utf-8',(err, data1) => {
  
  fs.readFile(`./txt/${data1}.txt`, 'utf-8',(err, data2) => {
   fs.readFile(`./txt/append.txt`, 'utf-8',(err, data3) => {
    console.log(data3)

    fs.writeFile('./txt/final.txt', `${data1}\n${data}`, 'utf-8',(err) => {

    })
  })
 })



})



