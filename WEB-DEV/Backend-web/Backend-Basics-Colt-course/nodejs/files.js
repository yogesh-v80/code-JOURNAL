const fs = require("fs");

console.log(process.argv)
console.log(process.cwd)

const folderName = process.argv[2] || 'Project'

// fs.mkdir("Hello", err =>{
// 	if(err) throw err;
// })
// 

fs.mkdirSync(folderName)

//just below code not working ??
// fs.writeFileSync(`${folderName}/index.html`)
// fs.writeFileSync(`${folderName}/app.js`)
// fs.writeFileSync(`${folderName}/style.css`)












