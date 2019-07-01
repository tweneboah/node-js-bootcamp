const express = require('express');
const fs = require('fs');
const app = express();

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())


//ROUTING

//Reading files

//. Read all Tours
 const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

 //Get all Tours
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
     results: tours.length,
     status: 'Success',
     tours
    })
})

 //Get a specific  Tour

 app.get('/api/v1/tours/:id', (req, res) => {

  

  res.status(200).json({
   results: tours.length,
   status: 'Success',
   tours
  })
})


//CREATING TOUR

app.post('/api/v1/tours', (req, res) => {
     const newId = tours[tours.length-1].id + 1;
     const newTour = Object.assign({ id: newId }, req.body);
     tours.push(newTour);
     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
          res.status(201).json({
           status: 'Success',
           data: {
            tour: newTour
           }
          })
     }) 
})

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})