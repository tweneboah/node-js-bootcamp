const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel')


dotenv.config({path: '../../config.env'}) //This will read the files we defined and saved them into node js environemnt variable so that we can retrieve them at anytime
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

//Reding JSON FILES

const tours = JSON.parse(fs.readFile('tours-simple.json', 'uft-8'));

//IMPORT DATA INTO DATABASE

const importData = async () => {

 try {
      await Tour.create(tours);
      console.log('Data successfully loaded!')
 } catch (error) {
    console.log(error)
 }
}

//DELETE ALL DATA FROM COLLECTIONS

const deleteData = async () => {
     try {
      await Tour.deleteMany();
      console.log('Data successfully Deleted!')
    } catch (error) {
    console.log(error)
    }
}

deleteData()

