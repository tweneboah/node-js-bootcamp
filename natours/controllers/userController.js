



  //Controllers are the functions of a route

// When there are many functions on one file, you have to attach the export keyword to so wherever you require these files, all the functions can be accessed

//You can also use a destructure to pull the individual functions

//When your importing it, you do it as 

  exports.getAllusers = (req, res) => {
   console.log('getAllusers')
   res.send('getAllusers')

  }

  exports.getUser = (req, res) => {
    console.log('getUser')
    res.send('getUser')
  }

  exports.createUser =  (req, res) => {
    console.log('createUser')
    res.send('createUser')
  }

  exports.updateUser = (req, res) => {
    console.log('updateUser')
    res.send('updateUser')
  }

  exports.deleteUser = (req, res) => {
   console.log('deleteUser')
   res.send('deleteUser')
 };
 
