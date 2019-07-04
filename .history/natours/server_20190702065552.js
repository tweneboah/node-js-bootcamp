const dotenv = require('dotenv');
const mongoose = require('mongoose')
const app = require('./app')

//DB Connection

const DB = process.env.DATABASE;

console.log(process.env.DATABASE)

mongoose.connect('DB', {
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(con => {
   console.log(con.connection)
   console.log('DB, Connected')
})


dotenv.config({path: './config.env'}) //This will read the files we defined and saved them into node js environemnt variable so that we can retrieve them at anytime

console.log(process.env) //This runs all our environemnt varriables


///////////// SERVER //////////
const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})

