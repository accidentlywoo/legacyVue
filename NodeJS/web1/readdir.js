var datafolder = './data';
var fs = require('fs');

fs.readdir(datafolder,function(error, filelist){
    console.log(filelist);
});