var fs = require('fs');
var recursive = require('recursive-readdir');

var dist_dir = process.argv[2];

function cleanFile(path) {
    fs.truncate(path, 0);
}

function cleanDirectory(path) {
    recursive(path, function(err, files) {
        if (!err) {
            files.forEach(function(file) {
                cleanFile(file);
            });
        } else {
            throw err;
        }
    });
}

fs.readdir(dist_dir, function(err, files) {
    if (!err) {
        files.forEach(function(folder) {
            var srcPath = dist_dir + '/' + folder + '/resources/app/src';

            console.log('Cleaning source code:', srcPath);
            cleanDirectory(srcPath);
        })
    } else {
        throw err;
    }
});
