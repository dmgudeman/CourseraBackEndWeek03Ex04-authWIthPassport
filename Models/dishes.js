/**
 * Server-side Development with NodeJS
 * Assignment02 - dishes.js
 * Created by David M Gudeman on 3/27/16.
 */
// grab the things we need
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// create a schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        unique: true
    },
    label: {
        type: String,
        // set the default to an empty string
        default: '',
        // set required to false to allow default to work. Although this alone defaults to an empty String
        required: false,
        unique: true
    },
    price: {
        type: Currency,
        required: false,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

// Create a model to use the schema
var Dishes = mongoose.model('Dish', dishSchema);

// make this available to our Node applications
module.exports = Dishes;

