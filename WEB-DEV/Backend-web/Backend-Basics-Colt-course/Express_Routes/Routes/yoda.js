const express = require("express")
const router = express.Router();


router.get("/", (req,res)=>{
	res.send("home yoda")
})

router.post("/", (req,res)=>{
	res.send("post")
})

router.get("/:id", (req,res)=>{
	res.send("get by id")
})

router.get("/:id/edit", (req,res)=>{
	res.send("edit yoda ")
})

module.exports = router;



