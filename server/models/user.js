var mongoose = require('mongoose');

module.exports = mongoose.model('hat',{
  firstname: String,lastname: String,email: String  ,username: String,password: String
});
 