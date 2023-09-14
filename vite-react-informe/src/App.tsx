import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/layout/nav/Nav'
import Footer from './components/layout/footer/Footer'
import Dashboard from './components/dashboard/Dashboard'
import AppRoutes from './AppRoutes'
import { Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <>
    
    <AppRoutes></AppRoutes>
      <div>

        <Nav></Nav>
      </div>
      <h1>Dashboard</h1>
      <div className="card">
      
          
     


        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>

        </p>
      </div>


      <Footer ></Footer>
    </>
  )
}

export default App
