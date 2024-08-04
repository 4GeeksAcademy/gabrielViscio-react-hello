import React from "react";
import imagen2 from "../../img/2.jpg";
import CardButtom from "./cardButtom.jsx"

const Card2 = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imagen2} className="card-img-top" alt="Image description"/>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <CardButtom />
            </div>
        </div>
    );
};

export default Card2;
