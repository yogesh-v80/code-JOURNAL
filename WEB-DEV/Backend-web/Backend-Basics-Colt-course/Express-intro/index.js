const express = require('express');

const app = express()
// console.dir(app)
const port = 3000;


// // it is a request
// app.use(()=>{
// 	console.log('we got a new request!')
// })
// 
// it is a request
/*app.use((req, res)=>{
	console.log('we got a new request!')
	// console.dir(req)
	
	// res.send("Hello it is a simple stirng")
	// res.send({obj: "eva"})
	res.send("<h1> It's a header </h1>")
	// there can only be one response res.send() at a
	//time here
})*/

//it starts a server
app.listen(port, () => {
	console.log("listening on port 3000")
})


// an http request is not a js object. 
// it is a text which is not particular to any
// programming language
// ex. the text is in JSON format 
// JSON is easily parsable to many other formats
// 


//////////////////
//adding routes //
//////////////////


/*
// if we put it before other responses 
// then it's going to overide the other 
// response
app.get("*" , (req, res) =>{
	console.log("it valid for any path")
})
*/

app.get("/", (req, res) =>{
	console.log("homepage")
	res.send("It is Homepage")
})

// app.post('/post', (req, res) =>{
// 	console.log("post req")
// 	res.send("it is a post request")
// })
// it won't shows up on browser
// check it on the postman using post req

app.get("/about", (req, res)=>{
	console.log("about sec")
	res.send("it's about section")
})

app.get("/contact", (req, res) =>{
	console.log("contact sec")
	res.send("it is contact section")
})


// app.get("*" , (req, res) =>{
// 	console.log("it valid for any path")
// 	res.send("It valid for any path")
// })


///////////////
//req.params //
///////////////

app.get("/r/:subreddit" , (req, res) =>{
	console.log("subreddit")
	console.log(req.params)
	const {subreddit} = req.params   //destructuring
	res.send(`<h1>It's ${subreddit} subreddit.`)
})

app.get("/r/:subreddit/:postID" , (req, res) =>{
	console.log("subreddit")
	console.log(req.params)
	const {subreddit,postID} = req.params   //destructuring
	res.send(`<h1>It's ${subreddit} subreddit and postID: ${postID}</h1>`)
})

//////////////
//req.query //
//////////////
/// a query is starts after the ? mark
/// and to add another query we use & ampersand

app.get("/search", (req,res) =>{
	console.log("searching")
	console.log(req.query)
	const {q} = req.query

	if(!q){
		res.send("nothing found if nothing searched")
	}

	res.send(`your serched query is : ${q}`)
})