/**
 * Server-side Development with NodeJS
 * Assignment02 - leadership.js
 * Created by David M Gudeman on 3/27/16.
 */
// grab the things we need
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


// create a schema
var leaderSchema = new Schema({
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
    designation: {
        type: String,
        required: true,
        unique: true
    },
    abbr: {
        type: String,
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

// Create a model to use the schema
var Leaders = mongoose.model('Leader', leaderSchema);

// make this available to our Node applications
module.exports = Leaders;

