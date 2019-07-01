const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes')

//IMPORTING CONTROLLERS

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())


//==========ROUTING========










 // = mounting router
//We will pass this as a middleware

//express.Router() is a function on express, when you console.log(tourRouter), you will get this
/**
 * function router(req, res, next) {
    router.handle(req, res, next);
  }
  This tells you that this is a middleware
  When you console.log(tourRouter) in the route handler you will see that there is a method call route that accepts the path and method of the route
  So after defining this route as tourRouter.route('/').get(getAllTours).post(createTour); then we pass it to app.use() as a middleware
  //Middleware takes in a function, in our case it first check if the user is on the right path as '/api/v1/tours' then it will execute the function passed to
 */ 
//console.log('tourRouter', tourRouter.route)

//=====PASSING THE ROUTE AS A MIDDLEWARE====
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


 


///////////// SERVER //////////
const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})