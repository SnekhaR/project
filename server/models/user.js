var mongoose = require('mongoose');

module.exports = mongoose.model('bear',{
  firstname: String,lastname: String,email: String  ,username: String,password: String
});
 