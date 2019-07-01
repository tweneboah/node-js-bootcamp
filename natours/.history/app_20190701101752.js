const express = require('express');
const app = express();



//MIDDLEWARE

//This help us to add request to body
app.use(express.json())


//==========ROUTING========

//////////// TOURS ROUTE METHODS ////////////////

const getAllTours = (req, res) => {
  console.log(tourRouter.route)
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


////////////////////  USERS ROUTES  /////////

const getAllusers = (req, res) => {
 console.log('getAllusers')
 res.send('getAllusers')

}

const getUser = (req, res) => {
  console.log('getUser')
  res.send('getUser')
}

const createUser =  (req, res) => {
  console.log('createUser')
  res.send('createUser')
}

const updateUser = (req, res) => {
  console.log('updateUser')
  res.send('updateUser')
}

const deleteUser = (req, res) => {
  console.log('deleteUser')
  res.send('deleteUser')
};




const tourRouter = express.Router();
const userRouter = express.Router(); // = mounting router
//We will pass this as a middleware

//express.Router() is a function on express, when you console.log(tourRouter), you will get this
/**
 * function router(req, res, next) {
    router.handle(req, res, next);
  }
  This tells you that this is a middleware
  When you console.log(tourRouter)
 */ 
console.log('tourRouter', tourRouter.route)

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

 tourRouter.route('/').get(getAllTours).post(createTour);
 tourRouter.route('/:id').get(getTour).delete(deleteTour).patch(updateTour);

 app.route('/').get(getAllusers).post(createUser);
 app.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
 



const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})