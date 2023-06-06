const express = require("express")

const app = express()
const path = require("path")
const redditData = require("./data.json")


// app.use() runs for every kind of request every time.
// it will look into public folder for css and js of bootstrap for styling
app.use(express.static(path.join(__dirname, "public")))

// there we setting the view engine to ejs
// so we can render with home with .ejs extension
app.set("view engine", "ejs")


//from any directory we can look for home in views dir
app.set("views", path.join(__dirname, "/views"))



app.get("/" , (req, res)=>{
	// res.send("Hi")
	// res.render("home.ejs")
	
	res.render("home")  // so we can render with home with .ejs extension

	
})

app.get("/rand", (req,res) =>{
	console.log("rand")
	const num = Math.floor(Math.random()*10 + 1)
	res.render("random", { num})
})


app.get("/r/:subreddit", (req, res)=>{
	console.log("subreddit")
	const {subreddit} = req.params
	const data = redditData[subreddit]
	// console.log(data)
		
	if(data){
	res.render("subreddit",{...data} )
    }  else{
    	res.render("notfound", {subreddit})
    }
})


app.get("/cats", (req,res)=>{
	console.log("cats")

	const cats = [ "blue", "Rocket", "Monty", "stephene", "Windton"]
	res.render("cats", {allCats: cats})
})

app.get("/notfound", (req,res)=>{
	console.log("notfound")

})

app.listen(8080, () => {
	console.log("listening on port 8080")
})