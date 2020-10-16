const fs = require("fs");

function writeFileAsync(filename, filedata){
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, filedata, function(err){
            if (err){
                reject(err);
            } else {
                resolve();
            }
        })
    })


}

module.exports = {
    writeFileAsync
}

//Test
// writeFileAsync("test.txt", "test").then(() => {
//     console.log("done")
// })