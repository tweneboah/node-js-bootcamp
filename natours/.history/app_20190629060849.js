const express = require('express');
const fs = require('fs')
const app = express();


const tours = fs.futimesSync()

app.get('/api/v1/tours', (req, res) => {
     
})

//POst
app.post('/api/v1/tours', (req, res) => {

   //Here we want to add data to the re
})

const port = 5000
app.listen( port, () => {
 console.log(`Server is running on port ${port}`)
})



