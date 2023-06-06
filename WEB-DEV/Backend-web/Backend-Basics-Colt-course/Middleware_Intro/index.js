const express = require("express")
const app = express()
const morgan = require("morgan")


// morgan("tiny")

// app.use(morgan("tiny"))
app.use(morgan("dev"))
// app.use(morgan("common"))
// app.use(morgan("common"))



/*

//app.use works for every single incomming request 
//it's a middleware
app.use((req,res,next)=>{
	// res.send("eyy")  // it stops here even next don't work for it
	console.log("first middleaware")
	next()
	console.log("first middleaware afte next")
})

app.use((req,res,next)=>{
	// res.send("eyy")  // it stops here even next don't work for it
	console.log("second middleaware")
	return next() 
	console.log("second middleaware afte return next") //won't run becuase next is returned
})

app.use((req,res,next)=>{
	// res.send("eyy")  // it stops here even next don't work for it
	console.log("third middleaware")
	next()
})

*/





// app.use((req,res,next)=>{
// 	console.log(req.requestTime) //undefined
// 	req.requestTime = Date.now()
// 	console.log(req.requestTime) 
// 	next()
// })

// app.use((req,res,next)=>{
// 	const {password} = req.query;
// 	if(password === "pass"){
// 		next()
// 	} else{
// 		res.send("not valid pass")
// 	}
// })




const verifyPass = (req,res,next)=>{
	const {password} = req.query
	console.log(password)
	console.log(password === "pass")
	if(password === "pass"){
		next()
	} 
	res.send("invalid password")
	
}


app.get("/secret", verifyPass, (req,res)=>{
	res.send("it's secret so i won't tell you")
	//it will run if password is valid
} )
//there we passed fun specified which will work as middleware
//we can pass multiple callbacks


// we can give specific path to app.use
app.use("/specific", (req,res,next)=>{
	console.log("run for specific path only")
	next()
})

app.get("/", (req,res)=>{
	res.send("hi")
})

app.get("/specific", (req,res)=>{
	res.send("specific for /specific")
})


app.use("/bhola", (req, res, next)=>{
	console.log(req.method, req.path)
	req.method = "GET"  //it will make every request of path /bhola to get request only 
})

app.post("/bhola", (req, res, next)=>{
	res.send(" meddleware ne get bana diya ")
})




app.get("/yoda", (req,res)=>{
	res.send("may be forth be with you")
})


// it will run if ony of the route in not exist
//note: it is app.use which runs for every response 
// if we put it before the routes
// but there we putting it at the end
// So it will run if ony of the route in not exist
app.use((req,res)=>{
	res.status(404).send("Not Found")
})



app.listen(3000, ()=>{
	console.log("listening... on port 3000")
} )