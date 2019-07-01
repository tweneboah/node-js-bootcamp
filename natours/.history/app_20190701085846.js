const express = require('express');

const app = express();

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())

//CUSTOM MIDDLEWARE

//middleware must comes before the routes

//As soon as use pass middleware to app.use(), it will call automatically

// app.use((req, res, next ) => {
//   console.log('Am a middleware 😃😃')

//   next()
// })




//. Read all Tours

//ROUTING METHODS

 //Get all Tours

const getAllTours = (req, res) => {
  console.log('Get All Tours')

}

//Get a specific  Tour

const getTour = (req, res) => {
  console.log('getTour')
}

//Creating Tour

const createTour =  (req, res) => {
  console.log('createTour')
}


const updateTour = (req, res) => {
  console.log('updateTour')
}

//DELETING
const deleteTour = (req, res) => {
  console.log('deleteTour')
};


//=====USERS
const getAllusers = (req, res) => {
 console.log('getAllusers')

}

//Get a specific  Tour

const getUser = (req, res) => {
  console.log('getUser')
}

//Creating Tour

const createUser =  (req, res) => {
  console.log('getUser')
}


const updateUser = (req, res) => {
  console.log('getUser')
}

//DELETING
const deleteUser = (req, res) => {
 
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

const tourRouter = express.Router();
const userRouter = express.Router(); // = mounting router
//We will pass this as a middleware


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter)

 tourRouter.route('/').get(getAllTours).post(createTour);
 tourRouter.route('/:id').get(getTour).delete(deleteTour).patch(updateTour)

 app.route('/').get(getAllusers).post(createUser)
 app.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)
 

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})