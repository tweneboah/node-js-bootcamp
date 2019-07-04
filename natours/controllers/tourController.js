const Tour = require('../models/tourModel');


 exports.getAllTours = async (req, res) => {
  

     try {
     
      //QUERYING

      const queryObj = {...req.query} //This contains all query value pairs
      
      const excludedFields = ['page', 'sort', 'limit', 'fileds']
     
      excludedFields.forEach(el => delete queryObj[el]) 

  
      const tours = await Tour.find(queryObj);

      res.json({
        status: 'Success',
        results: tours.length,
        data: {
          tours
        }
  
      })
     } catch (error) {
        res.status(404).json({
          status: 'fail',
          message: error
        })
     }
  }


  exports.getTour = async (req, res) => {
      try {
           const tour = await Tour.findById(req.params.id)
            res.status(200).json({
              status: 'Success',
              data: {
                tour
              }
            })
      } catch (error) {
        res.status(404).json({
          status: 'fail',
          message: error
        })
      }
  }

  //Creating Tour

  exports.createTour =  async (req, res) => {
   //In async await we handle error using try catch

   try {
    const newTour =  await Tour.create(req.body)

    res.status(201).json({
      status: 'Success',
      data: {
        tour: newTour
      }
    })
    res.send('createTour')
     } catch (err) {
       //The errors here are the errors we specified when creating schema
        res.status(400).json({
          status: 'fail',
          message: err
        })
   }
  
  }

  exports.updateTour = async (req, res) => {
       try {
         //Query for item you want to update
      const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //This returns the modified data rather than the original one
        runValidators: true
      })
        res.status(201).json({
          status: 'Success',
          data: {
            tour: tour
          }
        })
       } catch (error) {
        res.status(404).json({
          status: 'fail',
          message: error
        })
       }
  }

  exports.deleteTour = async (req, res) => {
    try {
      //Query for item you want to delete
   await Tour.findByIdAndDelete(req.params.id)
    
     res.status(204).json({
       status: 'Success'
     })
    } catch (error) {
     res.status(404).json({
       status: 'fail',
       message: error
     })
    }
  };
