const Tour = require('../models/tourModel');


 exports.getAllTours = async (req, res) => {
  

     try {

      console.log(req.query)
     // BUILD QUERY
     // 1. Filtering
      const queryObj = {...req.query} //This contains all query value pairs
      const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach((el) => {
            return delete queryObj[el]
        })
  
      

    //2.ADVANCE FILTERING

    //Now we want to implement less than, greater than etc 
    //Before using any operation, you must start with object 
  

    // in mongodb it must be an object like so {difficulty:'easy', duration: {$gte : 5}}
    //The standard way of writing query strings using operators  
    //http://localhost:3000/api/v1/tours?duration[gte]=5&difficulty=easy
    //This is the output when we console.log(req.query) { duration: { gte: '5' }, difficulty: 'easy' }

    //Now let's compare our query string and a filter method
    //{difficulty:'easy', duration: {$gte : 5}} = query strings
    //{ duration: { gte: '5' }, difficulty: 'easy' } = filter strings
    //The only difference is the mongodb operator so we have to find a way to replace the filter strings with the $ operator

    //======STEPS=========
    //1. Convert the object queryObj into JSON strings because we want to use a replace method.
    //we want to replace gte with $gte by using a regular expression

    let queryStr = JSON.stringify(queryObj)
     queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, math => `$${math}`)
    
   console.log(JSON.parse(queryStr))
      //NOTE: 
      //If you don't put await in front of a promise, it means your are holding the results, and at this point we can use a method on the hold data before returning to the user

      //Remember that the find() method if it doesn't receive any filter data it will return all

      let query = Tour.find(JSON.parse(queryStr)) 
      //We used let because we want to chain it with another method
      //Since we are not are using await i fron of it, it means this returns the query object

      //=======SORTING======
      //Remember that we excluded the sorting from our filtering logic, but now we need it

      if(req.query.sort) {
        const Tour = require('../models/tourModel');


        exports.getAllTours = async (req, res) => {
         
       
            try {
       
             console.log(req.query)
            // BUILD QUERY
            // 1. Filtering
             const queryObj = {...req.query} //This contains all query value pairs
             const excludedFields = ['page', 'sort', 'limit', 'fields']
               excludedFields.forEach((el) => {
                   return delete queryObj[el]
               })
         
             
       
           //2.ADVANCE FILTERING
       
           //Now we want to implement less than, greater than etc 
           //Before using any operation, you must start with object 
         
       
           // in mongodb it must be an object like so {difficulty:'easy', duration: {$gte : 5}}
           //The standard way of writing query strings using operators  
           //http://localhost:3000/api/v1/tours?duration[gte]=5&difficulty=easy
           //This is the output when we console.log(req.query) { duration: { gte: '5' }, difficulty: 'easy' }
       
           //Now let's compare our query string and a filter method
           //{difficulty:'easy', duration: {$gte : 5}} = query strings
           //{ duration: { gte: '5' }, difficulty: 'easy' } = filter strings
           //The only difference is the mongodb operator so we have to find a way to replace the filter strings with the $ operator
       
           //======STEPS=========
           //1. Convert the object queryObj into JSON strings because we want to use a replace method.
           //we want to replace gte with $gte by using a regular expression
       
           let queryStr = JSON.stringify(queryObj)
            queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, math => `$${math}`)
           
          console.log(JSON.parse(queryStr))
             //NOTE: 
             //If you don't put await in front of a promise, it means your are holding the results, and at this point we can use a method on the hold data before returning to the user
       
             //Remember that the find() method if it doesn't receive any filter data it will return all
       
             let query = Tour.find(JSON.parse(queryStr)) 
             //We used let because we want to chain it with another method
             //Since we are not are using await i fron of it, it means this returns the query object
       
             //=======SORTING======
             //Remember that we excluded the sorting from our filtering logic, but now we need it
       
             if(req.query.sort) {
                //attaching sort method to it
                query = query.sort(req.query.sort) //This will sort in ascending order by default
                //The problem is if the sorting property has the same value, which one will appear first, base on that we will configure it as this

                const sortBy = req.query.sort.split(',').join(' ');
                console.log(sortBy)
                query = query.sort(sortBy);
             }else {
               //If the user didn't sort then we will display the newly created post first
               query = query.sort('-createdAt')
             }
       

             //=====FIELD LIMITING=====
             if(req.query.fields){
               const fields = req.query.sort.split(',').join(' ');
               query = query.select(fields)
             }else {
               query = query.select('-__v')
             }


             //Execute the Query
             const tours = await query
       
       
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
       
      }

      //Execute the Query
      const tours = await query


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
