import React, { useState } from 'react'
import "./miniTabBar.css"
import { useNavigate } from 'react-router'

export default function MiniTabBar({TABS}) {
    const [activeTab,setActiveTab] = useState(TABS[0].name);
    const navigate = useNavigate();
  return (
    <>
        <div className="tabs" style={{display:"flex"}}>
            {
              TABS.map((item,index)=>{
                return(<div key={index} className="tab" onClick={()=>{
                    setActiveTab(item.name);
                    navigate(item.path)}
                } style={{padding:"6px 20px 6px 20px",margin:"0px 10px 10px 0px",textAlign:"center",cursor:"pointer"}}>
                  <p className={activeTab===item.name?'active-line':''}>{item.name}</p>
                </div>)
              })
            }
            {/* {
              expenseTabs.map((item)=>{
                return(
                  <Link to={item.path}>
                <div className="tab active-line" style={{padding:"6px 20px 6px 20px",backgroundColor:"white",margin:"0px 10px 10px 0px",textAlign:"center",cursor:"pointer"}}>
                  {item.name}
                </div>
                </Link>
                )
              })
            } */}
          </div>
    </>
  )
}
