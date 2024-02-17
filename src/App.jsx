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
  const [loggedin,setloggedin] = useState(false);
  const [userName, setUserName] = useState("");
  const [email,setemail] =useState("");
  const [url,seturl] =useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setloggedin(true);
        setemail(user.email);
        seturl(user.photoURL)
      } else setUserName("");
    });
  }, [userName,email,url]);


 // const handleloggedin =(newloggedin)=>{
 //  setloggedin(newloggedin);
  //  console.log("loggedin=", loggedin);
 //}

   return (
    <div className="App">
     
     <BrowserRouter>
      <Routes>
        <Route index element={<Home loggedin={loggedin} name ={userName} email={email} url={url} />} />
        <Route path='/check' element={<Check/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login loggedin={loggedin} />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
