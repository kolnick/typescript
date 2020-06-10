// @ts-ignore
import fs = require("fs");

function readFileAsync(filePath: string): Promise<any> {
    return new Promise(((resolve, reject) => {
        return fs.readFile(filePath, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    }));
}

function loadJSONAsync(filePath: string): Promise<any> {
    return readFileAsync(filePath).then(function (result) {
        return JSON.parse(result);
    });
}

loadJSONAsync("test.json").then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});



