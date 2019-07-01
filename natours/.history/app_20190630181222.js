const express = require('express');

const app = express();



//ROUTING
app.get('/', (req, res) => {
    res.status(404).json({Project:'Natours App'})
})

const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})