import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Swal from 'sweetalert2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App