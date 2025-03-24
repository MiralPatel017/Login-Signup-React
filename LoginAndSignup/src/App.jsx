import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Login from './components/auth/login/Login'
import Signup from './components/auth/signup/Signup'
import Dashbord from './components/dashbord/Dashbord'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashbord" element={<Dashbord />} />
      </Routes>
    </>
  )
}

export default App
