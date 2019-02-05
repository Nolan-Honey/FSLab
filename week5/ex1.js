var fs = require('fs');
const folder = './';
const path = require('path');
var param = process.argv[2];

fs.readdir(folder, (err, files) => {
    var f = files.filter(file => path.extname(file) == "."+param)
    console.log("Command arg - extension: ."+param)
    f.forEach(file => {
        console.log(file);
    });
  })