const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

const app = require('./app')


dotenv.config({path: './config.env'}) //This will read the files we defined and saved them into node js environemnt variable so that we can retrieve them at anytime
//console.log(process.env) //This runs all our environemnt varriables


//DB Connection

mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(con => {
  //  console.log(con.connection)
   console.log('DB, Connected')
})



///////////// SERVER //////////
const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})

