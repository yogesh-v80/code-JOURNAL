const express = require("express")
const app = express()

const wayRoutes = require("./Routes/yoda")
const routeAdmin = require("./Routes/admin")

app.use("/way", wayRoutes);
app.use("/admin", routeAdmin);



app.listen(8080, ()=>{
	console.log("listening")
})

