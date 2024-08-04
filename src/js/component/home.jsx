import React from "react";

// Include images into your bundle
import NavBar from "./nav.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
import Card2 from "./card2.jsx";
import Card3 from "./card3.jsx";
import Card4 from "./card4.jsx";
import Footer from "./footer.jsx";


// Create your first component
const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="bg-light pb-5">
                    <Jumbotron />
                </div>
                <div className="row justify-content-between">
                    <Card /><Card2 /><Card3 /><Card4 />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
