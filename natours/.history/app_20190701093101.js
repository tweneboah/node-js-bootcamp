const express = require('express');
const app = express();



//MIDDLEWARE

//This help us to add request to body
app.use(express.json())


//==========ROUTING========

//////////// TOURS ROUTE METHODS ////////////////

const getAllTours = (req, res) => {
  console.log('getAllTours')
   res.send('getAllTours')
}



const getTour = (req, res) => {
  console.log('getTour')
  res.send('getTour')
}



const createTour =  (req, res) => {
  console.log('createTour')
  res.send('createTour')
}


const updateTour = (req, res) => {
  console.log('updateTour')
  res.send('updateTour')
}


const deleteTour = (req, res) => {
  console.log('deleteTour')
  res.send('deleteTour')
};


//=====USERS
const getAllusers = (req, res) => {
 console.log('getAllusers')
 res.send('getAllusers')

}



const getUser = (req, res) => {
  console.log('getUser')
  res.send('getUser')
}

//Creating Tour

const createUser =  (req, res) => {
  console.log('createUser')
  res.send('createUser')
}


const updateUser = (req, res) => {
  console.log('updateUser')
  res.send('updateUser')
}

//DELETING
const deleteUser = (req, res) => {
  console.log('deleteUser')
  res.send('deleteUser')
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