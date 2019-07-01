const express = require('express');

const app = express();



//ROUTING



app.get('/api/v1/tours', (req, res) => {
   
})

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})