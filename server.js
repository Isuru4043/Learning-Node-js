console.log("Hello from server.js");

const os = require("os");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

const path = require("path");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

const { add, subtract, multiply, divide } = require("./math");

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
