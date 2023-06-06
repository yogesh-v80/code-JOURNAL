// CRUD operation
// Create (post) , Read (get) , Update (patch),  Delete (delete)

const express = require("express")
const app = express()
const path = require("path")
// const {v4:uuidv4} = require("uuid")
// uuidv4();

const {v4: uuid} = require("uuid")
// uuid();

const methodOverride = require("method-override")

// in these both app.use we parsing the data
// which is coming from the post request 
// as the part of the body 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride("_method"))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


let comments = [

	{
		id: uuid(),
		username: "todd",
		comment: "lot that is so funny"
	},	
	{
		id: uuid(),
		username: "dune",
		comment: "dune is fantastic"
	},	
	{
		id: uuid(),
		username: "harry",
		comment: "magic world by jk"
	},	
	{
		id: uuid(),
		username: "krishna",
		comment: "krishna one of the supreme god"
	},	
]


//reading or retrieving comments
app.get("/comments", (req,res)=>{
	console.log("comments retrieving")
	res.render("comments/index", {comments})
	
})

// form new comment
app.get("/comments/new", (req,res)=>{
	console.log("new comment")
	res.render("comments/new")
})


//

app.post("/comments", (req,res)=>{
	console.log("post")
	console.log(comments)
	const {username, comment} = req.body
	comments.push({username, comment, id: uuid() })
	console.log(comments)
	// res.send("it worked")
	res.redirect("comments")   //redirecting to /comments

	// res.render("comments", {comments})
})


//comments showing 
app.get("/comments/:id", (req,res) =>{
	console.log("comments/id")
	// console.log(req.params)
	const {id} = req.params;
	// console.log(id)
	const comment = comments.find(c => {
		// console.log(typeof(c.id))
		// console.log(typeof(id))
		// console.log(c.id === id.trim())
		return c.id === id.trim()})
	console.log(comment)
	//logic is if we match any c.id we get the whole one object in array.
	// console.log(comment)
	res.render("comments/show", {comment})

})


//update or edit the comment
app.patch("/comments/:id", (req,res)=>{
	console.log("update")
	const {id} = req.params;
	const newComment = req.body.comment;
	const foundComment = comments.find(c => c.id = id )
 	foundComment.comment = newComment;
 	res.redirect("/comments")
})



app.get("/comments/:id/edit", (req,res)=>{
	const {id} = req.params;
	const comment = comments.find(c => c.id = id)
	res.render("comments/edit", {comment})
})



// delete the comment 

app.delete("/comments/:id", (req,res)=>{
	console.log("delete")
	const {id} = req.params;
    comments = comments.filter(c => c.id != id)
	console.log(comments)
	// there filter returns the new array 
	res.redirect("/comments");

})


app.listen(8080, () => {
	console.log("listening at Port 8080")
})