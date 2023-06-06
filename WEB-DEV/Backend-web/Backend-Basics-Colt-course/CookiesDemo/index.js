const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")  // need npm i cookie-parser

app.get("/", (req,res)=>{
	res.send("fire hai apun")
})

app.use(cookieParser("signedKey"))

app.get("/setname", (req,res)=>{
	res.cookie("name", "pushpa")  // sending cookie   Name is name and value is pushpa
	res.cookie("book", "the untethered soul")
	res.cookie("avenger", "whatever it takes" {signed:true}) // not sure about this statement 
	res.send("jhukega nhi sala")
})

app.listen(5000, ()=>{
	console.log("listening port 5000")
})