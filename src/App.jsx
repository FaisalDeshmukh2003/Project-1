import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  const [currentPage, setcurrentPage] = useState("Register")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistER, setIsRegister] = useState(false)

  return (
    <div>

      {currentPage === "Register" && <Register />}
      {currentPage === "login" && isLoggedIn ? (
        <h1>Welcome, Admin!</h1>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}
export default App