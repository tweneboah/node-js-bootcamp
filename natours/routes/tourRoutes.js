  const express = require('express');
  const router = express.Router();
  const tourController = require('../controllers/tourController')


  // CUSTOME MIDDLEWARE: To get the id of a certain resource

  router.param('id', (req, res, next, val) => { 
    console.log('Tour id is', val)
    next()
  })


   router.route('/').get(tourController.getAllTours).post(tourController.createTour);
   router.route('/:id').get(tourController.getTour).delete(tourController.deleteTour).patch(tourController.updateTour);



   
   module.exports = router;//We use this when we have only one file to
