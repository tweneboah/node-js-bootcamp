
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

  //OVERVIEW PAGE
    if(pathName === '/' || pathName === '/overview') {
       res.end('This is the overview');

       //PRUD
    }else if(pathName === '/product') {
     res.end('This is the PRODUCT')

    } else if (pathName === '/api') {
      //We want to send json to the client
       res.writeHead(200, {
          'Content-type': 'application/json'
       })
        //Displaying the file read above
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

