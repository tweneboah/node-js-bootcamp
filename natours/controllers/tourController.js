const Tour = require('../models/tourModel');

        exports.getAllTours = async (req, res) => {
            
          console.log('my Query', req.query)
       
            try {
              //Advance filtering

              const queryObj = {...req.query} //This contains all our query data
              const excludedFields = ['page', 'sort', 'limit', 'fields']

              excludedFields.forEach((el) => {
                return delete queryObj[el]//This removes all the excludedFields from queryObj
              })

              //Advance part 2
              let queryStr = JSON.stringify(queryObj)
               queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, math => `$${math}`)
               console.log(JSON.parse(queryStr))

               let query =  Tour.find(JSON.parse(queryStr))


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
       
              
             //====LIMITING FIELDS
             //This determines the number of fields a client can select
             //For example in our database we have so many fields like, price, difficulty, and the rest, so if a user want only name and price, this is call field limiting, this will prevent bandwidth

             if(req.query.fields) {
               const fields = req.query.fields.split(',').join(' '); //This convert comma separated by the user to space which requires by mongoose

               query = query.select(fields) //Chainig with mongoose select method
               
             }else {
                query = query.select('-__v') //Excluding this to user user
             }


             //====PAGINATION=====
             const page = req.query.page * 1 || 1;
             const limit = req.query.limit * 1 || 100;
             const skip = (page -1) * limit

             query = query.skip(skip).limit(limit);

             if(req.query.page) {
               const numTours = await Tour.countDocuments();
               if(skip >= numTours) throw new Error('This page does not exist')
             }


              //EXECUTE QUERY
             
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
       
        




