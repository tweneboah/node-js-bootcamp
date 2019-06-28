const express = require('express');
const app = express();


app.get('/api/tour', (req, res) => {
   res.json({msg: 'Natours'})
})

const port = 5000
app.listen( port, () => {
 console.log(`Server is running on port ${port}`)
})



