const express = require('express');
const fs = require('fs')
const app = express();


const tours = fs.futimesSync()

app.get('/api/v1/tours', (req, res) => {
     
})

//POst
app.post('/api/v1/tours', (req, res) => {

   //Here we want to add data to the request body so we need  a middleware called body-parser to pass the data we want to send to the request object but
})

const port = 5000
app.listen( port, () => {
 console.log(`Server is running on port ${port}`)
})



