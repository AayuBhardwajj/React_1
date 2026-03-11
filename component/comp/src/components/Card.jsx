import React from 'react';
const user="Aayush"
function Card(props){

    return(
    <div className='card'>
        <img className='ph' src={props.img} /> 
      <h1> Hello {props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eius mollitia unde provident laboriosam officiis expedita animi modi optio nobis! Delectus dolore minus nostrum autem, culpa eveniet fugiat natus excepturi!
      Mollitia porro aperiam quia corporis?</p>
          <button className='but'>View profile</button>
     </div>

     
    )

}
export default Card;