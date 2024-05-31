import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const {user,loading,error,dispatch} = useContext(AuthContext)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // logic to send form data to server
    dispatch({type:"LOGIN_START"});
      try{
        const res = await axios.post("/auth/login",{email,password});
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        console.log(res);
        navigate("/");
      }catch(err){
        dispatch({type:"LOGIN_FAILURE",payload:err});
        navigate("/failed");
        console.log(err.response.data);
      }
}
  return (
    <>
      <div className="login-container"style={{width:"100vw",height:"100vh",display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",background:'linear-gradient(black,#3d3d3d)'}}>
        <div className="login-wrapper" style={{backgroundColor:"white",display:'flex',flexDirection:'column',height:"500px",width:"400px",alignItems:'center',border: "2px solid #e4e7ec",borderRadius:'10px'}}>
          <h1 style={{marginTop:'20px',fontFamily: "monospace"}}>Login Here</h1>
          <div className="form-wrapper" style={{display:'flex',flexDirection:"column",gap:"20px",width:"80%",height:'100%',justifyContent:'center'}}>
            <input type='text' style={{padding:'10px',borderRadius:'40px'}} placeholder='Enter Your Eamil' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='text' style={{padding:'10px',borderRadius:'40px'}} placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button style={{padding:'10px',borderRadius:'40px',cursor:'pointer',background:'linear-gradient(black,#3d3d3d)',marginTop:'30px',color:'white'}} onClick={handleSubmit}>{loading?"Loading...":"Submit"}</button>
          </div>
        </div>
        <p style={{color:"white",marginTop:'10px'}}>Made with love❤️ by suyash</p>
      </div>
     </>
  )
}
