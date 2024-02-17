import React from "react";
import { useState } from "react";
import Input from "../Input";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
export default function Signup() {
  const [values, setvalue] = useState({ name: " ", email: " ", pass: " " });
  const [errorMsg, setErrorMsg] = useState("");
  const [isdisabled, setdisabled] = useState(false);
  const navigate = useNavigate();
  const btndisabled = () => {
    setdisabled(true);
  };
  const handleSubmission = () => {
    console.log(values);

    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("fill all inputs");
      return;
    }
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log("method called");
        console.log(res);

        btndisabled();
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        console({ user });
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        console.log("signin with google");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create New Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label className="text-left block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                value={values.name}
                onChange={(e) =>
                  setvalue((prev) => ({ ...prev, name: e.target.value }))
                }
                id="email"
                name="name"
                type="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="text-left block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                value={values.email}
                onChange={(e) =>
                  setvalue((prev) => ({ ...prev, email: e.target.value }))
                }
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={values.pass}
                onChange={(e) =>
                  setvalue((prev) => ({ ...prev, pass: e.target.value }))
                }
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              disabled={isdisabled}
              onClick={handleSubmission}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Signup
            </button>
          </div>
        </div>
        <p className=" font-semibold text-indigo-600">or</p>
        <div className="w-full  space-y-6 flex justify-center">
          <button class=" w-[70%] bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 shadow-mg hover:shadow-lg focus:outline-none focus:ring focus:border-blue-500"
            onClick={SignUpUsingGoogle}

           >

            <img className="w-[20%] h-[90%]" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Icon" class="w-5 h-5" />
            <span className="text-m">Sign In with Google</span>
          </button>
         
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/Login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
        <b> {errorMsg}</b>
      </div>
    </div>
  );
}
