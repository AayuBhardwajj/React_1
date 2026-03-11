import { useState } from 'react'
import './App.css'
import XYZ from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <XYZ name="Aayush" img="https://images.unsplash.com/photo-1761839258289-72f12b0de058?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"/>
     <XYZ name="Ayush" img="https://images.unsplash.com/photo-1772442088712-df1780cbb709?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"/>
     <XYZ name="Naam" img="https://images.unsplash.com/photo-1772551765247-1c512c9f507d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"/>
    </>     
  )
}

export default App;