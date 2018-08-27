var jwt = require('jwt-simple');//used to genrate the token based authentiction
module.exports = function(arg1,arg2,password){
    return jwt.encode({'admin_email':arg1,'password':arg2},password);
};