var mongoose = require('mongoose');

module.exports = mongoose.model('sun',{
  firstname: String,lastname: String,email: String  ,username: String,password: String
});
 