const express = require('express');
const fs = require('fs')
const app = express();



/////////////////Middleware/////////
// app.use(express.json())


//////////////////Routes/////////

//GET
app.get('/api/v1/tours', (req, res) => {
     
})

//POst
app.post('/api/v1/tours', (req, res) => {
 console.log(req)
   //Here we want to add data to the request body so we need  a middleware called body-parser to pass the data we want to send to the request object but now express by default has built in that function so all what we have to do is pass that method as a middleware call app.use(express.json())

   //If you don't pass this app.use(express.json()) as a middleware you cannot access req.body

   //It helps us to send data to the server

   //Is important to send something to the user to finish the request cycle if not your sever will keep runing and then timeout

   //When posting data to the sever make sure to convert it into json by using JSON.stringify(your object here). When posting data to the server using a f
   res.json('Great')

})

const port = 5000
app.listen( port, () => {
 console.log(`Server is running on port ${port}`)
})



