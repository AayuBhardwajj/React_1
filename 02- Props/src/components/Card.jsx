import React from 'react'

function Card(props){
    return(
        <>
        <div className="cardd">
            <div className="image">
                <img src={props.img}></img>
            </div>
            <p>
                Hello, my name is {props.user} and my age is {props.age}
            </p>

            <button className='But'> Click Me</button>
        </div>
        </>
    
    )
    
}
export default Card;