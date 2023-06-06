const mongoose = require("mongoose")

const Product = require("./models/product")


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')

.then(()=> console.log("Mongoooooo  open")) 
.catch((er) => console.log("MOngoooo error \n", er));



// const p = new Product({name: "banana", price: 20, category: "fruit"})

const seedProducts = [
 
			 {name: "Milk", price: 70, category: "dairy"},
			 {name: "Cheese", price: 80, category: "dairy"},
			 {name: "Potato", price: 20, category: "vegetable"},
			 {name: "tomato", price: 40, category: "fruit"},
			 {name: "Spinach", price: 50, category: "vegetable"}

 ]

 Product.insertMany(seedProducts)

 //if anyone is not pass the validation according to the schema
 //then insertMany()  won't let enter anyone in dbs

// p.save()
.then(p => console.log(p))
.catch(e => console.log("error: ", e))


