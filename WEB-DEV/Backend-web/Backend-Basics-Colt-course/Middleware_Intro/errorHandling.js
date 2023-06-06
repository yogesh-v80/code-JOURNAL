const express = require("express")
const app = express()
const AppError = require("./AppError")


const verifyPass = (req,res,next)=>{
	const {password} = req.query
	// console.log(password)
	// console.log(password === "pass")
	if(password === "pass"){
		next()
	} 
	// res.send("invalid password")
	// res.status(401)
	// throw new Error('Not authorised / password required')
	throw new AppError("password required", 401)
	
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


//Error handling in Express

//first of all there is built-in middleware error handler 
//which runs whenever somewhere it error occure 
// syntax error, user error, ...

// and we can define out custom error handlers in express
// the callback have four parameters (err, req, res, next)






app.get("/error", (req,res)=>{
	// res.send("may be forth be with you")
	groot.d()
})


app.get("/admin", (req,res)=>{
	throw new AppError("you are not Admin", 403);
	// 403 means fobidden
	// when user is known but not authorised
	// and 401 is not authorised for anyone.
})



// error for async functions 


// app.get("/async",  async (req,res,next)=>{
// 	try{
// 		syntaxErrorsflsldjfl
// 	} catch(err){
// 		next(err)
// 	}
// })



/*
app.get("/async",  async (req,res,next)=>{
	await fetch("http://localhost:3001/product")
    .then(response=>response.json)
    .then(jsonresponse=>response.send(jsonresponse))
    .catch(next)
    
})
*/


/*
app.get("/async",  async (req,res,next)=>{
	await fetch("http://localhost:3001/product")
    .then(response=>response.json)
    .then(jsonresponse=>response.send(jsonresponse))
    .catch(err => {
    	next(err)
    })
    
})
*/


/*
//it will run only if there Route EXIST 
// there is an error in that route
//error like sytanx error
// just below code will override the 
// the built in error handler
//because it's have err in it's callback's parameter
app.use((err, req, res, next)=>{
	console.log("error error")
	console.log("error error")
	console.log("error error")
	console.log("error error")

})

*/


/*
// now if we have only next in this
// then the error gonna pass to the 
// built-in error handler
app.use((err, req, res, next)=>{
	console.log("error error")
	console.log("error error")
	console.log("error error")
	console.log("error error")
	// next()   //this for any middleware, not for another middleware with err as a parameter.
	next(err)   // and this for default or next error middleware only 
})

*/

/*
//so if we want to hit the erro with
// out own customized error message and error status then we 
// have to pass err in next
app.use((err, req, res, next)=>{
	console.log("error error")
	console.log("error error")
	console.log("error error")
	console.log("error error")
	// next(err)
	console.log(err)

	// next()
	 // because we don't have any other middleware after it so it will passed to default error handler
	// but NOte: there i am not passing any argument like err so the status code and err.stack is
	// will be handled by the default error handler
	next(err)  // there i am passing err .. so if we sets the status code or then it will be passed to it.
})
*/


app.use((err, req, res, next)=>{
	const {status = 500, message = "something went wrong"} = err;
	// res.status(404).send("not found");
	console.log(err)
	res.status(status).send(message);
	// res.status(status).send(message, err);
	// res.status(status).send(message, err.stack);
})





app.listen(3000, ()=>{
	console.log("listening... on port 3000")
} )