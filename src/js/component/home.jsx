import React from "react";

//include images into your bundle
import NavBar from "./nav.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
    return (
        <div> <div className="text-end">
                <NavBar/>
                </div>
            <div className="container">
                <div className="bg-light pb-5"> {/* Cambié bg-secondary por bg-light */}
                    <Jumbotron/>
                </div>
                <div className="container-fluid row justify-content-between">
                    <Card/><Card/><Card/><Card/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
