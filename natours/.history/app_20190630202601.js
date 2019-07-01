const express = require('express');
const app = express();

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())

//. Read all Tours

//ROUTING METHODS

 //Get all Tours

// const getAllTours = (req, res) => {
 
 
// }

// //Get a specific  Tour

// const getTour = (req, res) => {

// }

// //Creating Tour

// const createTour =  (req, res) => {
 
// }


// const updateTour = (req, res) => {
  
// },

//DELETING
// const deleteTour = (req, res) => {
  
// };

const me = (req, res) => {
 
}

//ROUTING

//Reading files


app.get('/api', )

// app.get('/api/v1/tours', getAllTours )
//  app.get('/api/v1/tours/:id', getAllTours)
// app.post('/api/v1/tours', createTour)
// app.patch('/api/v1/tours/:id', updateTour )
// app.delete('/api/v1/tours/:id', deleteTour)

//This methods helps us to modify the routes if we want to change the path
// app.route('/api/v1/tours').get(getAllTours)


const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})