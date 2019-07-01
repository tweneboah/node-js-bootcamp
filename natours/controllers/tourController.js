
  //Controllers are the functions of a route

// When there are many functions on one file, you have to attach the export keyword to so wherever you require these files, all the functions can be accessed

//You can also use a destructure to pull the individual functions

//When your importing it, you do it as 



//====CUSTOME MIDDLEWARE FOR CHECKING IF NAME OR PRICE IS EMPTY ======

exports.checkBody = (req, res, next) => {
   if(!req.body.name || !req.body.price) {
     return res.status(400).json({
       status: 'fail',
       message: 'Missing price or name'
     })
   }
}


 exports.getAllTours = (req, res) => {
    res.send('getAllToursf')
  }


  exports.getTour = (req, res) => {
   console.log('getTour')
   res.send('getTour')
  }

  exports.createTour =  (req, res) => {
   console.log('createTour')
   res.send('createTour')
  }

  exports.updateTour = (req, res) => {
   console.log('updateTour')
   res.send('updateTour')
  }

  exports.deleteTour = (req, res) => {
   console.log('deleteTour')
   res.send('deleteTour')
  };
