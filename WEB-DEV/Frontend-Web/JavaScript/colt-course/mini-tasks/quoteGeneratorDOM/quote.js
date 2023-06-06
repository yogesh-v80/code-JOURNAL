let quote = document.getElementById('quote')
let name = document.querySelector('.name')
let btn = document.getElementById('btn')

let Quotes = [ {qt:`" just do it"`,
				name: `Yogi`},
				{qt: `"consistency is the key"`,
				  name: `yogesh`},
				  {
				  	qt: `"I have no regrets, I have lessons only"`,
				  	name: `noOne`
				  },
				   {
				  	qt: `"watch your actions"`,
				  	name: `Yo`
				  },
				  {
				  	qt: `"Be concious about every action and words"`,
				  	name: `krishna`
				  },
				   {
				  	qt: `"You become what you Choose. choices makes you."`,
				  	name: `anonymous`
				  },

				   {
				  	qt: `"Awaken the force"`,
				  	name: `Star wars`
				  },

				   {
				  	qt: `"Jhukega nhi "`,
				  	name: `puspa`
				  }

]

btn.addEventListener("click", function(){

	console.log("clicked")

	let random = Math.floor(Math.random()*Quotes.length)

	quote.innerText = Quotes[random].qt

	name.innerText = Quotes[random].name
})