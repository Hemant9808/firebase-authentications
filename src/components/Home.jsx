import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
export default function Home({ loggedin, name,email,url }) {
  const navigate = useNavigate();
  const pic= "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-manager-icon-he-teacher-profile-vector-png-image_19531546.jpg"
  const login = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/signup");
  };
  const exit = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="space-y-6 flex flex-col items-center justify-center h-screen w-screen bg-slate-900	text-white">
     {!loggedin && <div className="flex flex-row space-x-6">
        <button
          onClick={signup}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-7 py-2.5 textl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link to="/signup">Signup</Link>
        </button>
        <button
          onClick={login}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-7 py-2.5 text-l font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link to="/login">Login</Link>
        </button>
      </div>
}
      <h2 className="text-2xl font-bold ">
        {name ? `Welcome - ${name}` : "Login please"}
      </h2>
      {loggedin ? <div class=" flex flex-col justify-center  bg-slate-700  rounded-lg overflow-hidden shadow-lg">
        <img
          class="w-full  rounded-[50%] h-64  object-cover "
        src= {url ?  url: pic} alt="User Photo"
        />
        <div class="p-6">
          <div class="font-bold text-xl mb-2 ">{name}</div>
          <p class=" text-base">{email}</p>
        </div>
      </div> : " "}
      {loggedin && (
        <div className="flex flex-row space-x-6">
          <button
            onClick={exit}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-7 py-2.5 textl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
