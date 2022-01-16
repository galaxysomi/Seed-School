const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  monChinh: {
    type: String,
    required: true
  },
  monDiemTam: {
    type: String,
    required: true
  },
  quaChieu: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

const FoodMenu  = mongoose.model('FoodMenu', UserSchema);

module.exports = FoodMenu;
