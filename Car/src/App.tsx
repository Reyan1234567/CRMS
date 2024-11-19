import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vehicle from './pages/Vehicles'
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Dashboard" element={<Dashboard />}/>
      <Route path="/Vehicle" element={<Vehicle/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
