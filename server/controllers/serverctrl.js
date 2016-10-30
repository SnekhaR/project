var Users = require('../models/user.js');
module.exports.create = function(req,res){
	var user = new Users(req.body);
	user.save(function(err,results)
		{
			if(err)
			{
				console.log("not registered")
			}
		});

}