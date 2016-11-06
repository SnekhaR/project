

    Users = require('../models/user.js');
	


   module.exports.create = function(req,res){
	console.log(req.body);
	var user = new Users(req.body);

	 user.save(function(err,results)
        {
            
            
            
                res.json(results);
            
        });
    }