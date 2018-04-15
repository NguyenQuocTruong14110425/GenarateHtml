const fs = require('fs');
class FileSystem {

    writeFileData(dir, namefile, data,callback) {
        var pathFile = dir + "/" + namefile;
        if (fs.existsSync(dir)) {
            fs.writeFile(pathFile, data, function (err) {
                if (err) return callback(err);
                else {
                    return callback(null, `Update success file: ${namefile}`);
                }
            });
        }
        else {
            fs.mkdirSync(dir)
            fs.writeFile(pathFile, data, function (err) {
                if (err) return callback(err);
                else {
                    return callback(null, `Create success file: ${namefile}`);
                }
            });
        }
    }

    writeAndAppendFileData(dir, namefile, dataNew,DataUpdate,callback) {
        var pathFile = dir + "/" + namefile;
        if (fs.existsSync(dir)) {
            fs.writeFile(pathFile, dataNew, function (err, file) {
                if (err) return callback(err);
                else {
                    fs.appendFile(pathFile, DataUpdate);
                    return callback(null, `Update success file: ${namefile}`);
                }
            });
        }
        else {
            fs.mkdirSync(dir)
            fs.writeFile(pathFile, dataNew, function (err, file) {
                if (err) return callback(err);
                else {
                    fs.appendFile(pathFile,DataUpdate);
                    return callback(null, `Create success file ${namefile}`);
                }
            });
        }
    }

}

module.exports = new FileSystem();