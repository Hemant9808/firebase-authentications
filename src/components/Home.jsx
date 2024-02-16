import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function Home(props) {
  const navigate = useNavigate();
  const login =()=>{
     navigate('/login');
  };
  const signup =()=>{
    navigate('/signup');
 };


  return (
    <div className= "space-y-6 flex flex-col items-center justify-center h-screen w-screen bg-slate-900	text-white"  >
      
      <div className="flex flex-row space-x-6">
        <button onClick={signup}  className="flex w-full justify-center rounded-md bg-indigo-600 px-7 py-2.5 textl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Link to='/signup' >Signup</Link></button>
        <button  onClick={login} className="flex w-full justify-center rounded-md bg-indigo-600 px-7 py-2.5 text-l font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Link to='/login'>Login</Link></button>
      
      </div>
    
      
      <h2 className="text-2xl font-bold ">{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}
