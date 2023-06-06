// one to Bujillion used for large data
// Eg. we can store the tweet id to the parent/user  or we can add user id to it's tweets

const mongoose = require("mongoose")

// const Schema = mongoose.Schema;
//or
const {Schema} = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')

// the connect method returns the promise
.then(()=> console.log("YelpCamp dbs connected :)"))
.catch((er) => console.log("\n error  :(  \n", er))


const userSchema = new Schema({
	username: String,
	age: Number
})


const tweetSchema = new Schema({
	likes: Number,
	text: String,
	user:{type: Schema.Types.ObjectId, ref: "User"}  //there "User" is User model
})

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);


const makeTweets = async () =>{
	// const owner = await new User({ username: "yoda", age: "3000"});
	const owner = await User.findOne({username: "yoda"})
	// const tweet1 = await new Tweet({ likes: 1000, text: "Yoda baba this is the way"});
	const tweet2 = await new Tweet({ likes: 3000, text: "May the force be with you"});
	tweet2.user = owner;
	tweet2.save()
	// owner.save()

}

// makeTweets()


const findTweetAndPopulate = async ()=>{
	// const tweet = await Tweet.findOne({ likes: 3000}).populate("user")
	// populate user

	// const tweet = await Tweet.findOne({ likes: 3000}).populate("user", "username")
	// populate user and only give me username

	const tweet = await Tweet.find({ }).populate("user")
	// find({})  find all tweet and populate the user

	console.log(tweet)
}

findTweetAndPopulate();










