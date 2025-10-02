import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='title-container'>
    </div>
    <BaristaForm/>
    </>
  )
}

export default App
