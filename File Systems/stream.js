const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(
  path.join(path.join(__dirname, "Read and Write", "lorem.txt"), "utf8")
);

const ws = fs.createWriteStream(
  path.join(__dirname, "Read and Write", "lorem-new.txt")
);

rs.on("data", (chunk) => {
  ws.write(chunk);
});
