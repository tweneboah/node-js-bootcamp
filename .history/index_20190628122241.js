
const fs = require('fs');
const http = require('http')





////////////////////////
//         SERVER
//API is a service that we can request for

//We want to read the file once so we need to put the code here which is synchronous

const tempOverview = fs.readFileSync(
 `${__dirname}/templates/template-overview.html`,
 'utf-8'
);
const tempCard = fs.readFileSync(
 `${__dirname}/templates/template-card.html`,
 'utf-8'
);
// const tempProduct = fs.readFileSync(
//  `${__dirname}/templates/template-product.html`,
//  'utf-8'
// );

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);



const server = http.createServer((req, res) => {
  const pathName = req.url
  console.log(pathName)
  //request has a property call url which gives the current

  //OVERVIEW PAGE
    if(pathName === '/' || pathName === '/overview') {
       //We have to read the template overview html page
       res.writeHead(200, {
        'Content-type': 'text/html'
     })
    res.end(tempOverview)
       //PRUDUCT PAGE
    }else if(pathName === '/product') {
     res.end('This is the PRODUCT')


     //API PAGE
    } else if (pathName === '/api') {
      //We want to send json to the client
       res.writeHead(200, {
          'Content-type': 'application/json'
       })
        //Displaying the file read above
        res.end(data)
           
      }
    
      //NOT FOUD PAGE
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

