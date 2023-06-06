const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')

.then(()=> console.log("open"))
.catch((er) => console.log("\n error \n", er))


const personSchema = new mongoose.Schema({
	first: String,
	last: String
})



// create a virtual (not saved in dbs) property (ther "fullName")
// which we can use on individual instances 
// for this we use get() person which have a callback
personSchema.virtual("fullName").get(function(){
	return `${this.first} ${this.last}`
})

// we can use set()  functin on the created property "fullName"
// to update it.

.set(function(v){
	// this.first =  v.substr(0, v.indexOf(" "));
	// this.last = v.substr(v.indexOf(" ") + 1)
	
	//or 
	
	const parts = v.split(" ");
	this.first = parts[0];
	this.last = parts[1];


})


// middleware 
//  pre and post

personSchema.pre("save", async function(){
	this.first = "yo";
	this.last = "vv";
	console.log("about to save")
})

personSchema.post("save", async function(){
	console.log("just saved")
})



const Person = mongoose.model("Person", personSchema);

const k = new Person({first: "kk", last: 'la'})

// k.save()
