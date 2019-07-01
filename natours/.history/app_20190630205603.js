const express = require('express');

const app = express();

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())

//CUSTOM MIDDLEWARE

//middleware must comes before the routes

//As soon as use pass middleware to app.use(), it will call automatically

app.use((req, res, next ) => {
  console.log('Am a middleware 😃😃')

  next()
})




//. Read all Tours

//ROUTING METHODS

 //Get all Tours

const getAllTours = (req, res) => {
  console.log(app.route)

}

//Get a specific  Tour

const getTour = (req, res) => {

}

//Creating Tour

const createTour =  (req, res) => {

}


const updateTour = (req, res) => {
  
}

//DELETING
const deleteTour = (req, res) => {
  
};



//ROUTING

//Reading files




//app.get('/api/v1/tours', getAllTours )
 //app.get('/api/v1/tours/:id', getAllTours)
//app.post('/api/v1/tours', createTour)
//app.patch('/api/v1/tours/:id', updateTour )
//app.delete('/api/v1/tours/:id', deleteTour)

//This methods helps us to modify the routes if we want to change the path

//We use getAllTours and createTour becasue they have the same path
 app.route('/api/v1/tours').get(getAllTours).post(createTour);
 app.route('/api/v1/tours/:id').patch(updateTour).delete(deleteTour)

 app.route('/api/v1/users').get(getAllusers).post(createUser)
 app.route('/api/v1/users/:id').get(ge).post(createUser)
 

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})