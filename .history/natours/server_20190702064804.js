const dotenv = require('dotenv');
const mongoose = require('mongoose')
const app = require('./app')

//DB Connection
mongoose.connect()


dotenv.config({path: './config.env'}) //This will read the files we defined and saved them into node js environemnt variable so that we can retrieve them at anytime

console.log(process.env) //This runs all our environemnt varriables


///////////// SERVER //////////
const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})

