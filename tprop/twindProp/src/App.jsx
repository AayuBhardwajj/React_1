import './App.css'
import Card from './components/Cards'
import Card3 from './components/Mcard'





function NameCard({name, sem, course}){
  return(
    <h1>My name is {name}. I am currently in my {sem} of {course} </h1>
  )
}

function App(){
  return(
    <>
    <NameCard name="Aayush" sem={6} course="CSE" />
     </>
   
  )
}
export default App;
