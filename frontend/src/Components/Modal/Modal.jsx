import React from 'react'
import './modal.css'

export default function Modal({children,onClose,title,subtitle,actions,id,creator,Ref}) {
    // const data = Ref.current.value;
  return (
    <>
        <div className="madal-wrapper" style={{height:"100vh",width:"100vw",opacity:"2px",display:"flex",justifyContent:"center",alignItems:"center"
            ,zIndex:"3",position:"absolute",left:"0px",top:"0px", background: "rgba(255, 255, 255, 0.5)",backdropFilter:"blur(1px)"
        }}>
            <div className="modal-container" style={{position:"relative",height:"500px",width:"450px",backgroundColor:"white"
            ,border: "2px solid #e4e7ec",borderRadius:"10px",overflowY:"hidden"}}>
                <div className="header" style={{position:"sticky",top:"0px",left:"0px",padding:"20px",backgroundColor:"white"}}>
                    <h2 className="title">{title || "Title"}</h2>
                    <p className="subTitle">{subtitle || "subTitle"}</p>
                    <h3 className='close-btn' style={{position:"absolute",top:"10px",right:"20px",fontSize:"20px",cursor:"pointer"}} onClick={onClose}>X</h3>
                </div>
                <div className="contents" style={{display:'flex',flexDirection:"column",padding:'20px',height:"300px",width:"80%",overflowY:"scroll"}}>
                    {children}
                </div>
                <div className="footer" style={{position:"absolute",bottom:"0px",left:"0px",width:"100%",display:'flex'}}>
                   {actions && !creator && actions.map((item)=>{
                        return  <button style={{flex:'1',padding:"6px",cursor:"pointer",border:"none",...item.style}} onClick={()=>{item.onClick(id)}}>{item.name}</button>
                    })}
                    {actions && creator && actions.map((item)=>{
                        return  <button style={{flex:'1',padding:"6px",cursor:"pointer",border:"none",...item.style}} onClick={()=>{const data = Ref.current.value; item.onClick(id,data)}}>{item.name}</button>
                    })}
                    {/* <button style={{width:"100%",padding:"6px",color:"red",backgroundColor:"rgb(224, 180, 180)",cursor:"pointer",border:"none"}}>Withdraw</button> */}
                </div>
            </div>
        </div>
    </>
  )
}
