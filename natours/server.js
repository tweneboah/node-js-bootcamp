const dotenv = require('dotenv');
const mongoose = require('mongoose')
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


//CREATING DB

//Schema is a blueprint that's used to create document/object
//We create model out of a schema

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'Must have a price']
  }
});

//Creating model
const Tour = mongoose.model('Tour', tourSchema)



///////////// SERVER //////////
const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})

