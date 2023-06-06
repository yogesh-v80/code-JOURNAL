const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const methodOverride = require("method-override")

const Product = require("./models/product")
const Farm = require("./models/farm")

const categories = ['fruit', 'vegetable', 'dairy'];

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')

.then(()=> console.log("Mongoooooo  open")) 
.catch((er) => console.log("MOngoooo error \n", er));


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
//note: there is double underscore in dirname
app.use(express.urlencoded({extended:true}))   // for parsing req.body in /products   post request
app.use(methodOverride("_method"))


/////////////////////
//Farm Routes
////////////////////

app.get("/farms", async (req,res)=>{
	const farms = await Farm.find({})
	res.render("farms/index", {farms})
})


app.get("/farms/new", (req,res)=>{
	res.render("farms/new")
})

app.get("/farms/:id", async (req,res)=>{
	const {id} = req.params;
	const farm =  await Farm.findById(id).populate('products');

	console.log(farm)
	res.render("farms/show", {farm})
})


app.delete("/farms/:id", async (req,res)=>{
	console.log("deleting")
	const {id} = req.params;
	console.log(id)
	const farm = await Farm.findByIdAndDelete(id.trim())
	//not just above statement going to trigger the mongoose post middleware 
	// in the ./models/farm.js 
	res.redirect("/farms")
})

app.post("/farms", async (req,res)=>{
	// res.send(req.body)
	const farm = new Farm(req.body)
	await farm.save();
	res.redirect("/farms")
})


app.get("/farms/:id/products/new", async (req,res)=>{
	const {id} = req.params;
	const farm = await Farm.findById(id);
	res.render("products/new", {categories, farm})
})

app.post("/farms/:id/products", async (req,res)=>{
	const {id} = req.params;
	const farm = await Farm.findById(id);
	const {name, price, category} = req.body;
	const product = new Product({name, price, category})
	farm.products.push(product)
	product.farm = farm;
	await farm.save()
	await product.save()
	res.redirect(`/farms/${id}/`)
})






/////////////////
//Product Routes
//////////////////

//all products
app.get("/products", async (req,res)=>{

	console.log("products/")
	console.log(req.query)
	const {category} = req.query;
	let catTrimmed = "all";

	if(category){
	 catTrimmed = category.trim();
	}
	// console.log(category.trim());
	console.log(catTrimmed)
	if(category && catTrimmed !== "all"){
	const products = await Product.find({category: catTrimmed})
	// console.log( "products :- ",products)
	res.render("products/index", {products, categories, catTrimmed})
	} 	else{
	const products = await Product.find({})
	res.render("products/index", {products, categories, catTrimmed})
	}
	// console.log(products)
	// res.send("all products wiil be here ...")
})


//new product
app.get("/products/new", (req,res) =>{
	//note: there we can't specify path like
	//this ->  "products/new"   we need pre / here
	console.log("products/new")
	res.render("products/new")
	//note there we do not specify the path
	//with pre / or like "/products/new" (this invalid)
})

app.post("/products", async (req,res)=>{
	console.log("products post")
	console.log(req.body)
	const newProduct = new Product(req.body);
	await newProduct.save();
	// console.log(newProduct)
	res.redirect(`/products/${newProduct._id}`)
})

app.get("/products/:id", async (req, res)=>{
	console.log("products/:id")
	const {id} = req.params;
	console.log(id)
	const product = await Product.findById(id.trim()).populate("farm", "name")
	console.log(product)
	// res.send("details page")

	res.render("products/show", {product})

})


//edit 
app.get("/products/:id/edit", async (req,res)=>{
	console.log('/products/:id/edit');
	const {id} = req.params;
	const product = await Product.findById(id.trim());
	res.render("products/edit", {product, categories})
})

//put for edit
app.put("/products/:id", async (req, res)=>{
	console.log("put req edit")
	// console.log(req.body)
	const {id} = req.params;
	const product = await Product.findByIdAndUpdate(id.trim(), req.body, {runValidators: true, new: true})
	// console.log(req.body)
	res.redirect(`/products/${product._id}`)  
	// it stops from resubmission of form and 
	// redirect to another page after submission

})


//delete 
app.delete("/products/:id", async (req,res)=>{
	console.log("deleting..")
	const {id} = req.params;
	const deletedProduct = await Product.findByIdAndDelete(id.trim())
	res.redirect("/products");
})


// //filter product

// app.get("/products/filter", (req, res) =>{
// 	console.log("filtering")
// 	console.log(req.params)
// 	res.send("got you")
// })

app.listen(3000, () =>{
	console.log("listening on port 3000")
})