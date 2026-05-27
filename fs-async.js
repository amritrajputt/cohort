import fs from "node:fs"
import fsPromises from "node:fs/promises"

// Callback-based (traditional)
fs.writeFile("async.txt", "hello from async.js", (err) => {
    if (err) console.log(err);
    console.log("file written successfully!");
})

fs.readFile("async.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
})

// Promise-based (async/await)
async function reading ()  {
    const data = await fsPromises.readFile("finalText.txt", "utf-8")
    console.log(data);
};


reading()