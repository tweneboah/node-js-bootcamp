const express = require('express');
const fs = require('fs');
const app = express();

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())

//. Read all Tours
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
//ROUTING METHODS

 //Get all Tours

const getAllTours = (req, res) => {
 console.log(app)
 res.status(200).json({
  results: tours.length,
  status: 'Success',
  tours
 })
}

//Get a specific  Tour

const getTour = (req, res) => {
 const id = req.params.id + 1; //converting string

 if(id > tour.l)



 res.status(200).json({
  status: 'Success',
   data : {
    tour
   }
 })
}

//Creating Tour

const createTour =  (req, res) => {
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
}


const updateTour = (req, res) => {
  
},

//DELETING
const deleteTour = (req, res) => {
  
};



//ROUTING

//Reading files




//app.get('/api/v1/tours', getAllTours )
 app.get('/api/v1/tours/:id', getTour)
app.post('/api/v1/tours', createTour)
app.patch('/api/v1/tours/:id', updateTour )
app.delete('/api/v1/tours/:id', deleteTour)

//This methods helps us to modify the routes if we want to change the path
app.route('/api/v1/tours').get(getAllTours)


const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})