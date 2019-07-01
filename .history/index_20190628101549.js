
const fs = require('fs');
const http = require('http')





////////////////////////
//         SERVER


//We want to read the file once so we need to put the code here which is synchronous

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

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

     //__dirname returns the current path of the file
     //Is a best practice to use __dirname

     res.writeHead(200, {
      'Content-type': 'application/json'
   })
   res.end(data)
       
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

