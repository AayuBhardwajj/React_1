import React from "react";

function Card(prop){
    return(
        <div className="Carrd">
            <img src={prop.img}/>
            <h1>{prop.name}</h1>

        </div>
    )
}

export default Card;