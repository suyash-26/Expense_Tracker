import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async ()=>{
    // logic to send form data to server
      setLoading(true);
      try{
        const res = await axios.post("/auth/login",{email,password});
        setLoading(false);
        console.log(res);
        navigate("/");
      }catch(err){
        setLoading(false);
        navigate("/failed");
        console.log(err.response.data);
      }
}
  return (
    <>
      <input type='text' placeholder='Enter Your Eamil' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='text' placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={handleSubmit}>{loading?"Loading":"Submit"}</button>
     </>
  )
}
