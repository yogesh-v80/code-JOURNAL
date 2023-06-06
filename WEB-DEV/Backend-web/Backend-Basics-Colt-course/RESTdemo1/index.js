const express = require("express")
const app = express()

// in these both app.use we parsing the data
// which is coming from the post request 
// as the part of the body 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/tacos", (req,res)=>{
	console.log("get")
	const {meat, qty} = req.query
	console.log(req.query)
	res.send(`<h1>Your meat: ${meat} and total quantity ${qty}</h1>`)
})

app.post("/tacos", (req,res)=>{
	console.log("post")
	console.log(req.body)
	const {pmeat, pqty} = req.body;
	res.send(`Ok, here are you ${pqty} ${pmeat} `)
	})


app.listen(8080, () => {
	console.log("listening at Port 8080")
})