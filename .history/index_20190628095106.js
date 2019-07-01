
const fs = require('fs');
const http = require('http')


///////////////////////////////
//      File System

//Node is all about callback. The code below says when the system,
//finish reading the text on the file then run the results, which is the data argument


// // //Reading text from a file
// fs.readFile('./txt/start.txt', 'utf-8',(err, data1) => {
  
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8',(err, data2) => {
//    fs.readFile(`./txt/append.txt`, 'utf-8',(err, data3) => {
//     console.log(data3)


//      //Writting to file

//     fs.writeFile('./txt/final.txt', `${data1}\n${data3}`, 'utf-8',(err) => {
//        console.log(fs.watch())
//     })
//   })
//  })



// })


////////////////////////
//         SERVER

//API is a service that we can request for

const server = http.createServer((req, res) => {
  const pathName = req.url
  console.log(pathName)
  //request has a property call url which gives the current

    if(pathName === '/' || pathName === '/overview') {
       res.end('This is the overview');

    }else if(pathName === '/product') {
     res.end('This is the PRODUCT')

    } else if (pathName === '/api') {

     //We want to read the data on the file and then convert json to javascript format and then we send the results back to the client
       
     //Reading the file
     fs.readFile('./dev-data/data.json')
     res.end('API')
    }
    
    else {
     res.writeHead(404, {
      //Header help us to specify other properties to the request object
      //We specify the kind of data we are sending
      //In our case we are telling the server that we want to display html
      'Content-type': 'text/html'
     });
     res.end('<h1>Page Not found</h1>')
    }

  })

server.listen(8000, '127.0.0.1', () => {
 console.log('Listening to requests on port 8000');
});

