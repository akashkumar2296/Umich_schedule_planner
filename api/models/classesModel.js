'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  deptName: {
    type: String,
    required: 'Name of department'
  },
  classNum:{
    type: String,
    required: 'Class Number'
  },
  className:{
    type: String,
    required: 'Name of class'
  },
  professor:{
    type: String,
    required: "Name of professor"
  },
  meetingTime:{
    type: [{
      type: String,
      required: "day"
      },
      {
        type: String,
        required: "times"
      }
    ]
  },
  credits:{
    type: String,
    required: "Number of credits"
  },
  description:{
    type: String,
    required: "description of class"
  },
  difficulty:{
    type: String,
    required: "difficulty on a scale of 1-10"
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);