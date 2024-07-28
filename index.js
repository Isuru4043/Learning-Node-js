const { format } = require("date-fns");

const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd \t HH:mm:ss"));

console.log(uuid());
