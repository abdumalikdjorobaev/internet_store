import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "./pages/Main";
import { LogIn } from "./pages/LogIn";
import './style.scss'
import { Register } from "./pages/Register";
import { useEffect } from "react";
import { Trash } from "./pages/Trash";
import { Category } from "./pages/Category";
import { Users } from "./pages/Users";

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
        <Route path='/category' element={<Category/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/log-in' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
