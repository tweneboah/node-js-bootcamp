const express = require('express');

const app = express();



//ROUTING
app.get('/', (req, res) => {
 
})

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})