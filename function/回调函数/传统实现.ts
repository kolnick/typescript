// @ts-ignore
import fs = require("fs");

function loadJsonSync(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath));
}

console.log(loadJsonSync("test.json"));

function loadJsonASync(filePath: string, callback: (error: Error, data?: any) => void) {
    fs.readFile(filePath, function (error, data) {
        if (error) {
            callback(error);
        } else {
            let result;
            try {
                result = JSON.parse(data);
            } catch (error) {
                callback(error);
            }
            callback(error, result);
        }
    })
}

loadJsonASync("test.json", function (error, data) {
    console.log(data);
});