//console.log("My second project");
var fs = require('fs');
fs.readFile('./file.txt', function(err, data){
if(err){
    console.error(err);
}else{
    console.log(data.toString());
}
});