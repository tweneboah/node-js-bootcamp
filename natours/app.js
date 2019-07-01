const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes')

//IMPORTING CONTROLLERS

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())

//serving static files
app.use(express.static(`${__dirname}/public`))


//=====PASSING THE ROUTE AS A MIDDLEWARE====
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;


 

