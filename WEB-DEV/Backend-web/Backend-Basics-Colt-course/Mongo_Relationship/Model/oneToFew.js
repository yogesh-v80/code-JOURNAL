// one to few approach good for small data

const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')

// the connect method returns the promise
.then(()=> console.log("YelpCamp dbs connected :)"))
.catch((er) => console.log("\n error  :(  \n", er))


const userSchema = new mongoose.Schema({
	first: String,
	last: String,

	addresses: [
		{	
			// _id: {_id: false},   //disabling _id creation in addresses, newer version 7
			street: String,
			city: String,
			state: String,
			country: String,
			// _id: {id: false}   //won't work, only for older version before mongoose 7
			_id: {_id: false},   //disabling _id creation in addresses, newer version 7

		}
	]
})

const User = mongoose.model("User", userSchema)

const makeUser = async () => {
	const u = new User({
		first: "Harry",
		last: "potter",
	})
	u.addresses.push({
		street: "222 diagon valley",
		city: "unknown",
		state: "Unknownnnn",
		country: "magical world"

	})

	const res = await u.save();
	console.log(res)
}

const addAddress = async (id)=>{
	const user = await User.findById(id);
	user.addresses.push({
		street: "roma",
		city: "joma",
		state: "toma",
		country: "ziroma"
	})

	const res = user.save()
	console.log(user)
}






// makeUser();

addAddress("645fc3b4379d20ca54b26176");












