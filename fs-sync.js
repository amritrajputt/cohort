import fs from "node:fs"

/*file exist krta h to likh dega nhi to file bna k likh dega
args:path,content,type(ex:-utf8) it will overwrite previous sentences*/

fs.writeFileSync("test.txt", "hello from sync.js!")

//to add more line not overwrite
fs.appendFileSync("test.txt","\nappended data")

//args: path,type
const data = fs.readFileSync("test.txt","utf-8")
console.log(data);

// creating folder also nested can be done
// fs.mkdirSync("fs module/innerfolder")

// for nested folder if root folder is not then use recursive: true
fs.mkdirSync("myFolder/innerfolder",{recursive:true})

// delete 

// fs.unlinkSync("test.txt")

// rename
fs.renameSync("test.txt","text.txt")

//copy

fs.cpSync("text.txt","finalText.txt")

//delete folder

fs.rmdirSync("myFolder", { recursive: true })