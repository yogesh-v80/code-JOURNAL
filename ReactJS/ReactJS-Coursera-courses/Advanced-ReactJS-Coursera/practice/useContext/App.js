

import {UserProvider, useUser} from './UserContext'



const LoggedUser = () => {
	const {user} = useUser();
	return (

		<p>
			Hello <span className="username">{user.name}</span>

		</p>
		);
};

const Header = () =>{
	return (
		<header>
		<h2> Blog App</h2>
		<LoggedUser/>
		</header>
		)
}


const Page = () =>{
	const {user} = useUser();
	return(
	<div>
	<h2>What is Lorem Ipsum?</h2>
	<p>
	 	<span>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Molestiae cum ea aliquid necessitatibus aspernatur? 
	 	Odio explicabo dicta itaque incidunt sint alias excepturi facere mollitia amet earum, et doloribus nam fuga?</span>
	 	<span>Deserunt quae velit, tenetur quas tempore, minus. Dolorum ipsam aut quibusdam expedita amet dolor. Excepturi, 
	 	eligendi ex, in sint, praesentium unde reiciendis enim explicabo est ea omnis illo expedita debitis.</span>
	 	<span>Aperiam vero saepe placeat dolores quia officiis tenetur quasi itaque eaque explicabo dolorem consequatur 
	 	quibusdam rerum aliquid porro commodi, dolorum nihil facere fugit. In adipisci placeat, cum magni nam, hic.</span>
	 	
	 </p> 

	 <p>Written by {user.name}</p>
	</div>
	)
}


function App() { 

	return ( 
		<div className="App">

			<Header />
			<Page />
	
	
		</div>

		); 
} 


function Root() {
	return (
			<UserProvider>
				<App />
			</UserProvider>
	);
}

export default Root;

