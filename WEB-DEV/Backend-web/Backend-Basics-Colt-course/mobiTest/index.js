const express = require("express")
const app = express();

const path = require("path")



app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req,res)=>{
	console.log("/")
	// res.send("hi")
	res.render("index")
})


app.listen(3000, "192.168.52.5", ()=>{
	console.log("listening")
})
//listen at ->   http://192.168.52.5:3000 


// it's really cool
// thanks to the coder coder girl
// todya i watched a yt vd of thecodercoder 
// there i got to know about how to use 
// local network ip address and listen on port
// now i can create server with ip of local network
// and connect the both pc and mobile to access the 
// local ip hosted site on both platform
// 
// 
// point is ->   http://192.168.52.5:3000    on this address 
// i can see the same underbuilding site on mobile
// it's cool
// 
// note:ipaddress may change 
// 
// check ip ->   hostname -I     or   curl ipconfi.me