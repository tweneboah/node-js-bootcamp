const express = require('express');

const app = express();



//ROUTING

app.get('')
// app.get('/', (req, res) => {
//     res.status(200).json({Project:'Natours App'})
// })


// app.post('/', (req, res) => {
//  res.status(200).json({Project:'Natours App'})
// })
const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})