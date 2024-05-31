import React, { useContext, useState } from 'react'
import './sidebar.css'
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import img from "./1.jpg"
import { AuthContext } from '../../contexts/AuthContext';

export default function Sidebar() {

    // const History = useHistory();
    const [activeTab,setActiveTab] = useState("My Expenses");
    const navigate = useNavigate();
    const {user,dispatch} = useContext(AuthContext);
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

    const handleLogOut = (e)=>{
        dispatch({type:"LOGOUT"});
        navigate("/");
    }

  return (
    <>
        <div className='sidebar-container'>
            <div className='sidebar-contents'>
                <div className="user-details">
                    <div className="img-class">
                        <img src={img} alt='img'/>
                    </div>
                    <h3>{user.name}</h3>
                    <p style={{wordWrap:"break-word"}}>{user.email}</p>
                    <div className="options" onClick={handleLogOut} style={{display:"flex",margin:"20px 0 10px 0",fontSize:"19px",alignItems:"center",cursor:"pointer"}}>
                        <IoLogOutOutline/>
                        <h6>Logout</h6>
                    </div>
                    <hr/>
                </div>
                <div className='sidebar-tabs'>
                   {TABS.map((item,index) => {
                        return (<p key={index} onClick={()=>{
                            setActiveTab(item.name)
                            navigate(item.path)
                        }} className={`sidebar-tab ${item.name===activeTab?"active":" "}`} >{item.name}</p>)
                    })}
                </div>
            </div>
        </div>
    </>
  )
}
