
import './App.css';

import Login from './components/Login';
import {  
  BrowserRouter ,  /* as Route */
  Routes,  
  Route, 
  Switch, 
  Link  
}   
from 'react-router-dom';  
import Home from './components/Home';
import Spinner  from './components/Spinner.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState  } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [spinProp, setSpinProp] = useState(true);

  const handleAuth = ()=>{
    setIsAuth(true)
  }

  const handleSpinProp = ()=>{
    setSpinProp(false)
  }

  console.log("IN APp " + isAuth);

  return (
    <BrowserRouter>
      {
         spinProp ?  !isAuth? (<Login handleAuth={handleAuth}/>) : (<Home handleSpinProp={handleSpinProp} />)   : (<Spinner handleSpinProp={handleSpinProp}/>)
      }
      <Routes>
        <Route path="/login" element={<Login handleAuth={handleAuth} />} />
        <Route path="/home" element={<Home handleSpinProp={handleSpinProp} />} />
        <Route path="/spinner" element={<Spinner handleSpinProp={handleSpinProp} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
