const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    instruction:{
        type: String,
        required: true
    },

    class:{
        type: String,
        required: true
    },

    datePosted:{
        type: Date,
        default: Date.now
    },

    dateOfSubmission:{
        type: Date,
        required: true
    }

});

const assignments = mongoose.model('assignmentsList', schema);

module.exports = assignments;
