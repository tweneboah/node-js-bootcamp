const express = require('express');
const fs = require('fs');
const app = express();



//ROUTING

//Reading files
 const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
     status: 'Success',
      tours
    })
})

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})