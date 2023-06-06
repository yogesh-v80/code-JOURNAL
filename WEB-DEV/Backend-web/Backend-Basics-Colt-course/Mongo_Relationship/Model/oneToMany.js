// one to many used for large data

const mongoose = require("mongoose")

// const Schema = mongoose.Schema;
//or
const {Schema} = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')

// the connect method returns the promise
.then(()=> console.log("YelpCamp dbs connected :)"))
.catch((er) => console.log("\n error  :(  \n", er))


const productSchema = new Schema({
	name: String,
	price: Number,
	season: {
		type: String,
	    enum: ["Spring", "Summer", "Fall", "Winter"]
	}
});


const farmSchema = new Schema({
	name: String,
	city: String,
	products: [{type: Schema.Types.ObjectId, ref: "Product"}]  
	 // their "Product" is a model which we created by productSchema
	  // the object types is comes from mongoose
	//ref tells which model to use during population
	// population is getting the ID's corresponding data
})




// Product.insertMany([
// { name: "Melon", price: 4.99, season: "Summer"},
// { name: "Watermelon", price: 5.99, season: "Summer"},
// { name: "Asparagus", price: 2.99, season: "Spring"}
// 	])


const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);


// const makeFarm = async () => {
// 	const farm = new Farm({ name: "Belly Farms", city: "Guinda"})
// 	const melon = await Product.findOne({name: "Melon"})
// 	console.log(melon)
// 	farm.products.push(melon)
// 	// console.log(farm)
// 	await farm.save()
// 	console.log(farm)
// }

// makeFarm();

const addProduct = async () =>{
	const farm = await Farm.findOne({name: "Belly Farms"})
	const watermelon = await Product.findOne({name: "Watermelon"})
	farm.products.push(watermelon)
	await farm.save()
	console.log(farm);
}

// addProduct()



// Farm.findOne({name: "Belly Farms"}).then(f => console.log(f))


Farm.findOne({name: "Belly Farms"})
	.populate("products")  // populating the products field in Farm
	.then(farm => console.log(farm))












