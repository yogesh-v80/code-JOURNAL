const express = require("express")
const router = express.Router();

router.use((req,res,next)=>{
	if(req.query.isAdmin){
		return next()
	}

	res.send("no access granted")
})

router.get("/", (req,res)=>{
	res.send("admin home")
})


router.get("/nosecret", (req,res)=>{
	res.send("secret")
})

router.get("/mission", (req,res)=>{
	res.send("no secret code mission ")
})

module.exports = router;



