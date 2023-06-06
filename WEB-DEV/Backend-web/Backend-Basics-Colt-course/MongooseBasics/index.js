// import mongoose from "mongoose"
//  OR
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/test')

// the connect method returns the promise
.then(()=> console.log("open"))
.catch((er) => console.log("error ", er))



const moviSchema = new mongoose.Schema({
	title: String,
	year: Number,
	rating: Number,
	isGood: Boolean,
});

const Movie = mongoose.model("Movie", moviSchema);

// const dune = new Movie({ title: "dune", year: 2022, rating: 9, isGood: true})


Movie.insertMany([
	{ title: "dune", year: 2022, rating: 9, isGood: true},
	{ title: "lakhya", year: 2007, rating: 9, isGood: true},
	{ title: "race3", year: 2018, rating: 3, isGood: false},
	{ title: "dark", year: 2018, rating: 9.3, isGood: true},
	{ title: "ozark", year: 2015, rating: 8, isGood: true}
	])


.then(data => console.log(data))








// boilerplat on mongoose website
/*

const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


*/











