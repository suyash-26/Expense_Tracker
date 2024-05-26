import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./navigation.css"

export default function Navigation({title}) {
  return (
    <>
        <div  className="navbar" style={{backgroundColor:"white",
    // width:"100%",
    padding:"10px 0px 10px 20px",
    display:"flex",
    alignItems:"center",
    fontSize:"24px",
    zIndex:2,
    position:"sticky",
    top:"0px",
    boxShadow: "1px 1px 1px 1px gray"}}>
            < MdOutlineKeyboardBackspace/>
            <p style={{margin:"10px"}}>{title}</p>
        </div>
        <hr/>
    </>
  )
}
