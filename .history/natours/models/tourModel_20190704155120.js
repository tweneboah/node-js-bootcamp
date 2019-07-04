const mongoose = require('mongoose')

//CREATING DB

//Schema is a blueprint that's used to create document/object
//We create model out of a schema

const tourSchema = new mongoose.Schema({
      name: {
        type: String,
        required: [true, 'A tour must have a'],
        unique: true,
        trim: true 
      },
      duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
      },
      maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
      },
      difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty']
      },
      ratingsaAverage: {
        type: Number,
        default: 4.5
      },
      ratingsQuantity: {
        type: Number,
        default: 0
      },
      price: {
        type: Number,
        required: [true, 'Must have a price']
      },
      priceDiscount: {
        type: Number
      },
      summary: {
        type: String,
        trim: true, //Removing whitespace
        require: [true, 'A tour must have a description']
      },
      description: {
        type: String,
        trim: true //Removing whitespace
      },
      imageCover: {
        type: String,
      },
      images: {
        type: [String] //Because will store multiple images
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        select: false ''
      },
      startDate: {
        type: [Date],
      },
});

//Creating model
const Tour = mongoose.model('Tour', tourSchema);


module.exports =Tour;


