const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    class:{
        type: String,
        required: true
    },

    dateEnrolled:{
        type: Date,
        default: Date.now
    }

});

const enrolledStudents = mongoose.model('enrolledstudentslist', schema);

module.exports = enrolledStudents;
