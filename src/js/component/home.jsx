import React from "react";

//include images into your bundle
import NavBar from "./nav.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Card from "./card.jsx";


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<div className="container">
				<Jumbotron/>
				<div className="card-container row">
					<Card/><Card/><Card/><Card/>
				</div>
			</div>
		</div>
		
	);
};

export default Home;
