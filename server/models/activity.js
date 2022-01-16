const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  place:{
    type: String,
    required: true
  }
});

const Activity = mongoose.model('Activity', UserSchema);

module.exports = Activity;
