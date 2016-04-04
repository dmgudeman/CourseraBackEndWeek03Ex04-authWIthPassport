/**
 * Server-side Development with NodeJS
 * Assignment02 - promotions.js
 * Created by David M Gudeman on 3/27/16.
 */
// grab the things we need
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


// create a schema
var promotionSchema = new Schema({
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
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

// we need to create a model using it
var Promotions = mongoose.model('Promotion', promotionSchema);

// make this available to our Node applications
module.exports = Promotions;

