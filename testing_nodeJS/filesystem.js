const fs = require("fs");

fs.readFile("./text.txt", "utf-8", (err, file) => {
    console.log(err, file);
});

const text = fs.readFileSync("./text.txt", "utf-8");
console.log(text);
