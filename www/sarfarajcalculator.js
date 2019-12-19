var exec = require('cordova/exec');


module.exports.add = function(arg0,success, error)
{
    exec(success, error ,'sarfarajCalculator' , 'add', [arg0]);
}


module.exports.substract = function(arg0,success, error)
{
    exec(success, error ,'sarfarajCalculator' , 'substract', [arg0]);
}
