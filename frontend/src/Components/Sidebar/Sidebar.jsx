import React, { useState } from 'react'
import './sidebar.css'
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";

export default function Sidebar() {

    // const History = useHistory();
    const navigate = useNavigate();
    const TABS = [
        {
            "name":"My Expenses",
            "path":"/myexpenses"
        },
        {
            "name":"My Approvals",
            "path":"/myapprovals"
        },
    ]
    
    const url = "https://static.vecteezy.com/system/resources/previews/012/738/835/original/sj-logo-design-initial-sj-letter-logo-icon-design-pro-free-vector.jpg";
  return (
    <>
        <div className='sidebar-container'>
            <div className='sidebar-contents'>
                <div className="user-details">
                    <img src={url} alt='img'/>
                    <h3>Suyash Jaiswal</h3>
                    <p style={{wordWrap:"break-word"}}> suyashjaiswal2001@gmail.com</p>
                    <div className="options" style={{display:"flex",margin:"20px 0 10px 0",fontSize:"19px",alignItems:"center",cursor:"pointer"}}>
                        <IoLogOutOutline/>
                        <h6>Logout</h6>
                    </div>
                    <hr/>
                </div>
                <div className='sidebar-tabs'>
                   {TABS.map((item) => {
                        return (<p onClick={()=>{
                            navigate(item.path)
                        }} className='sidebar-tab'>{item.name}</p>)
                    })}
                </div>
            </div>
        </div>
    </>
  )
}
