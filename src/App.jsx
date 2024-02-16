import { React } from "react";
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Check from './components/Check'
import Home from "./components/Home";
import Signup from './components/Signup/Signup'
import Login from './components/Login'
import { useState,useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, [userName]);

   return (
    <div className="App">
     
     <BrowserRouter>
      <Routes>
        <Route index element={<Home name ={userName}/>} />
        <Route path='/check' element={<Check/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
       


      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
