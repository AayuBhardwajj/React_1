import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// functio n App() {

//   let [counter, setCounter] = useState(0);

//   function addValue(){
//     if(counter===10){
//       return;
//     }
//     setCounter(counter+1);
    
//   }

//    const subValue=()=>{
//     if(counter===0){
//       return;
//     }
//     setCounter(counter-1);
//   }
//   return (
//     <>
//     <h2>Value is : {counter} </h2>
    
//      <button 
//      onClick={addValue}
//      >Increment</button>
//      <br></br>
//     <button 
//     onClick={subValue}
//     >Decrement</button>
//     </>
//   )
// }

function App1(){
  let [counter, setCounter] = useState(0);

  const addV = ()=> {
    if(counter>=10){
      return;
    }
    setCounter(counter+1);
    
  }

  const decV =()=>{ 
    setCounter(counter-1);

    
  }
  return(
    <>
  <h1>Hello</h1>
  <button onClick={addV}>Increment {counter}</button>
  <button onClick={decV}> Decrement {counter}</button>
  </>
  )
}





export default App1;
