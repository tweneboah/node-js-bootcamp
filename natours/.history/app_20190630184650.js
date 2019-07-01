const express = require('express');
const fs = require('fs');
const app = express();



//ROUTING

//Reading files

//. Read all Tours
 const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))


 //Get all Tours
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
     results: tours.length,
     status: 'Success',
     tours
    })
})

app.post('/api/v1/tours', (req, res) => {
  
})

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})