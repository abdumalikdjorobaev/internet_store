import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "./pages/Main";
import { LogIn } from "./pages/LogIn";
import './style.scss'
import { Register } from "./pages/Register";
import { useEffect } from "react";
import { Trash } from "./pages/Trash";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('log-in')
    }
  },[])
  
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/trash' element={<Trash/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/log-in' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
