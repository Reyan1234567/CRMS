import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Staff_management from './pages/Staff_management'
import Vehicle from './pages/Vehicle'
import './index.css'
import Inspection from './pages/Inspection'
import Driver from './pages/Driver'
import Price from './pages/Price'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Dashboard" element={<Dashboard />}/>
      <Route path="/Staff_management" element={<Staff_management/>}/>
      <Route path="/Vehicle" element={<Vehicle/>}/>
      <Route path="/Inspection" element={<Inspection/>}/>
      <Route path="/Driver" element={<Driver/>}/>
      <Route path="/Price" element={<Price/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
