const express = require('express');
const fs = require('fs');
const app = express();

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())


//ROUTING METHODS

const getAllTours = (req, res) => {
 res.status(200).json({
  results: tours.length,
  status: 'Success',
  tours
 })
}

const getTour = (req, res) => {
 const id = req.params.id + 1; //converting string

 if(id > tour.l)

 const tour = tours.find(el => el.id === id)

 res.status(200).json({
  status: 'Success',
   data : {
    tour
   }
 })
}


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


const deleteTour = (req, res) => {
  
};



//ROUTING

//Reading files

//. Read all Tours
 const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

 //Get all Tours
app.get('/api/v1/tours', getAllTours )

 //Get a specific  Tour

 app.get('/api/v1/tours/:id', getTour)


//CREATING TOUR

app.post('/api/v1/tours', createTour)


//Updating
app.patch('/api/v1/tours/:id', updateTour )

//DELETING

app.delete('/api/v1/tours/:id', deleteTour)

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})