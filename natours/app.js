const express = require('express');
const multer = require('multer')
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes')

//IMPORTING CONTROLLERS

//MIDDLEWARE

//This help us to add request to body
app.use(express.json())

//serving static files
app.use(express.static(`${__dirname}/public`))



//configure multer eg, accepting pdf, img
const uploads = multer({
 //configuration goes here
 dest: 'images', //destination folder
  limits: {
    fileSize: 1000000
  },
  fileFilter (req, file, cb){
    //the file type is in the file argument
    // if( !file.originalname.endsWith('.pdf')){
    //      return cb(new Error('Please upload pdf'))
    // }
    // //Accepting if it's a pdf file
    // cb(undefined, true)


    if(!file.originalname.match(/\.(doc|docx)$/)){
      return cb(new Error('Please upload a word document'))
 }
 //Accepting if it's a pdf file
 cb(undefined, true)
  }
})


//Middleware
// const errorMiddleware = (req, res, next) =>{
//   throw new Error('fromMy mIDDLWARE')
  
// }


//endpoint for uploads
app.post('/uploads', uploads.single('upload'), (req, res) => {
  //Note the value passed to single must be same as the field in the form
    res.send('Works')
 }, (error, req, res, next) => {
    //these four values will tell express that we are handling errors
    res.status(400).send({error: error.message})
 })

// //endpoint for uploads
// app.post('/uploads', uploads.single('upload'), (req, res) => {
//  //Note the value passed to single must be same as the field in the form
//    res.send('Works')
// })

//validation, file size and file type








//=====PASSING THE ROUTE AS A MIDDLEWARE====
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;


 

