import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar/>
        <p>Hello World</p>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
      </div>
    </>
  )
}

export default App
