import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  function addValue(){
    if(counter===10){
      return;
    }
    setCounter(counter+1);
    
  }

   const subValue=()=>{
    if(counter===0){
      return;
    }
    setCounter(counter-1);
  }
  return (
    <>
    <h2>Value is : {counter} </h2>
    
     <button 
     onClick={addValue}
     >Increment</button>
     <br></br>
    <button 
    onClick={subValue}
    >Decrement</button>
    </>
  )
}

export default App
