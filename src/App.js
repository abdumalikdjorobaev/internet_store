import { Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "./pages/Main";
import { LogIn } from "./pages/LogIn";
import './style.scss'
import { Register } from "./pages/Register";
import { useEffect } from "react";
import { Trash } from "./pages/Trash";
import { Category } from "./pages/Category";
import { Users } from "./pages/Users";
import { Products } from "./components/products";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('log-in')
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/main' element={<Products />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/register' element={<Register />} />
          <Route path='/category' element={<Category />} />
          <Route path='/users' element={<Users />} />
          <Route path='/log-in' element={<LogIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
