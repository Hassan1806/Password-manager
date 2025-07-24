import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import Register from './pages/Register';
import Login from './pages/Login';
import { checkAuth } from './components/Manager';
function App() {


  return (
    <><div className="bg-white [background:radial-gradient(125%_125%_at_50%_10%,#101828_40%,#00a63e_100%)] min-h-screen">
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={checkAuth() ? <Manager /> : <Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
