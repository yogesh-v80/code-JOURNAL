const mongoose = require("mongoose")

const Product = require("./product")

const {Schema} = mongoose;


const farmSchema = new Schema({
	name: {
		type: String,
		required: [true, "Farm must have a name"]
	},
	city: {
		type: String
	},
	email:{
		type: String,
		required: [true, "Email required"]
	},
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product"
		}
	]
})


//Note: these are not express middleware.
//it is mongoose middleware there is four types of middleware in mongoose
// there below code is Query middleware 



// pre 
// farmSchema.pre("findOneAndDelete", async function(data){
// 	// ....
	// console.log("pre middleware")
	// console.log(data)
// })


//post
farmSchema.post("findOneAndDelete", async function(farm){
	if(farm.products.length){
		const res = await Product.deleteMany({_id: {$in: farm.products}})
		console.log(res)
	}


})


const Farm = mongoose.model("Farm", farmSchema);


module.exports = Farm;




