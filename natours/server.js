const dotenv = require('dotenv')
const app = require('./app')



//====ENVIRONMENT VARIABLE
//This helps us to hide our sensitve data
//After creating the env files you need a package to connect the files to your application, this is called dotenv

dotenv.config({path: './config.env'}) //This will read the files we defined and saved them into node js environemnt variable so that we can retrieve them at anytime

console.log(process.env) //This runs all our environemnt varriables


///////////// SERVER //////////
const port = 3000
app.listen(port, () => {
 console.log(`App is runing on port ${port}`)
})

