import './App.css'
import Card from './components/Cards'
import Card3 from './components/Mcard'





function NameCard({name, sem, course}){
  return(
    <h1>My name is {name}. I am currently in my {sem} of {course} </h1>
  )
}

function NameCard1({info}){
  return(
    <h1>My name is {info.name}. I am currently in my {info.sem} of {info.course}  </h1>
  )
}
function App(){

  const info={
    name:"Aayush",
    sem: 6,
    course:"CSE"
  }
  return(
    <>
    <NameCard  name="Aayush" sem="6" course="CSE"/>
    <br></br>
    <NameCard1 info={info}/>
     </>
   
  )
}
export default App;
