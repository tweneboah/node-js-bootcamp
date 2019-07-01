const express = require('express');
const fs = require('fs');
const app = express();



//ROUTING

//Reading files
 const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple`))

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json()
})

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})