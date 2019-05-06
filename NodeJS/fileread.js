const fs = require('fs');
fs.readFile('sample','utf8',function(err, data){
    console.log(data);
})