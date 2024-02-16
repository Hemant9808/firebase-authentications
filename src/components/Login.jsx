import {React,useState} from "react";
import Input from "./Input";

import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import {Link, useNavigate} from "react-router-dom";
export default function Login() {
    const [values, setvalue] = useState({ email: " ", pass: " " });
    const [errorMsg, setErrorMsg] = useState("");
    const [isdisabled,setdisabled] = useState(false);
    const navigate = useNavigate();
    const check =()=>{
      console.log(values.email);
    }
    const submit=()=>{
      console.log("clicked");
      signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setdisabled(true);
        console.log("clicked");
        setdisabled(true);
        setvalue({email:'',pass:'',});
        console.log(values);
        navigate('/')
      })
      .catch((err) => {
       
        setErrorMsg(err.message);
      });
    
        
      
    
    }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div className="space-y-6">
      <div>
        <label  className="text-left block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={values.email} onChange={(e)=>setvalue((prev)=>({...prev,email: e.target.value}))} id="email" name="email" type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input
           value={values.pass}
           onChange={(e)=> 
            setvalue((prev)=>({...prev,pass: e.target.value}))} id="password" name="password" type="password"   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button disabled={isdisabled} onClick={submit}  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </div>

    <p className="mt-10 text-center text-sm text-gray-500">
     Don't have a account?
     
      <Link to='/signup' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">create account</Link>
    </p>
    <b> {errorMsg}</b>
  </div>
</div>
  );
}
