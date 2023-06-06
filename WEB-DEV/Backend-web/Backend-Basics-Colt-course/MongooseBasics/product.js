
const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')

.then(()=> console.log("open")) 
.catch((er) => console.log("error \n", er));


// building schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		uppercase: true
	},
	price: {
		type: Number,
		required: true,
		// min: 0
		min: [0, "Price must be positive"]
	},
	onSale:{
		type: Boolean,
		default: false
	},
	brandName: {
		type: [String],
		default: ["No brand entered"]
	},

	qty: {
		online:{
			type: Number,
			default: 0
		},
		inStore:{
			type: Number,
			default: 0
		}
	},

	size: {
		type: String,
		enum: ["S", "M", "L"]
	}

})



// instance method

productSchema.methods.toggleSale = function() {
	this.onSale = !this.onSale;
	return this.save()
}


productSchema.methods.addBrands = function(newBName) {
	this.brandName.push(newBName)
	return this.save()
}


productSchema.statics.fireSale = function(){
	return this.updateMany({}, {onSale: true, price: 0})
}


// the above code of instance method will work with Product
// only if we added it to productSchema before creating the Product model
const Product = mongoose.model("Product", productSchema)

// const bike = new Product({ name: "charge", price: 300, qty:{ online: 100}, brandName: ["realme"], size: "x"  })
// it will show enum error becuse "x" is not part of the enum in schema

// Product.findOneAndUpdate({name: "BACKPACK"}, {price: -22}, {new: true})


//we can run validtor on this
// Product.findOneAndUpdate({name: "BACKPACK"}, {price: -7777}, {new: true, runValidators: true})
// it's going to give error because we using the runValidators: true
// and we definded in Schema that the price should be minimum 0





const findProducts = async () => {
	const foundProduct = await Product.findOne({name: "RRR"})
	console.log(foundProduct)
	await foundProduct.toggleSale();
	console.log(foundProduct)
	await foundProduct.addBrands("adobe")
	console.log(foundProduct)

}


Product.fireSale().then(res => console.log(res))







// bike.save()
//saving to dataBase named shopApp
//there bike will be the name of collections

// .then(d => {
// 	console.log("your data")
// 	console.log(d)
// })

// .catch( er => {
// 	console.log("oh no error")
// 	console.log(er)
// 	// console.log(er.name)
// 	// console.log(er.errors.name)
// 	// console.log(er.errors.name.properties.message)
// })

