// const fs = require("fs");
const fsPromises = require("fs").promises;

const path = require("path");

const fileops = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "Read and Write", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "Read and Write", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "Read and Write", "promiseWrite.txt"),
      "Hi, nice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "Read and Write", "promiseWrite.txt"),
      path.join(__dirname, "Read and Write", "promiseWriteNew.txt")
    );
  } catch (err) {
    console.error(err);
  }
  const newdata = await fsPromises.readFile(
    path.join(__dirname, "Read and Write", "promiseWriteNew.txt"),
    "utf8"
  );
  console.log(newdata);
};

fileops();

// fs.readFile(
//   path.join(__dirname, "Read and Write", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

console.log("Hello World");

// fs.writeFile(
//   path.join(__dirname, "Read and Write", "reply.txt"),
//   "Hi, nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("write complete");

//     fs.appendFile(
//       path.join(__dirname, "Read and Write", "reply.txt"),
//       "Hi, nice to meet you",
//       (err) => {
//         if (err) throw err;
//         console.log("append complete");
//         fs.rename(
//           path.join(__dirname, "Read and Write", "reply.txt"),
//           path.join(__dirname, "Read and Write", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("append complete");
//           }
//         );
//       }
//     );
//   }
// );

console.log("End of program");
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error: ${err}");
  process.exit(1);
});
