import React from "react";

// Include images into your bundle
import NavBar from "./nav.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

// Create your first component
const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="bg-light pb-5"> {/* bg-secondary changed to bg-light */}
                    <Jumbotron />
                </div>
                <div className="row justify-content-between">
                    <Card /><Card /><Card /><Card />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
