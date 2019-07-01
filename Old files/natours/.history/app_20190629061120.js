const express = require('express');
const fs = require('fs')
const app = express();
const tours = fs.futimesSync()


/////////////////Middl

app.get('/api/v1/tours', (req, res) => {
     
})

//POst
app.post('/api/v1/tours', (req, res) => {

   //Here we want to add data to the request body so we need  a middleware called body-parser to pass the data we want to send to the request object but now express by default has built in that function so all what we have to do is pass that method as a middleware call app.use(express.json())
})

const port = 5000
app.listen( port, () => {
 console.log(`Server is running on port ${port}`)
})



