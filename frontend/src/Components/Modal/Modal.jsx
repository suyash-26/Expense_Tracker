import React from 'react'

export default function Modal({children,onClose,title,subtitle}) {
  return (
    <>
        <div className="madal-wrapper" style={{height:"100vh",width:"100vw",opacity:"2px",display:"flex",justifyContent:"center",alignItems:"center"
            ,zIndex:"3",position:"absolute",left:"0px",top:"0px", background: "rgba(255, 255, 255, 0.5)",backdropFilter:"blur(1px)"
        }}>
            <div className="modal-container" style={{position:"relative",height:"500px",width:"450px",backgroundColor:"white"
            ,border: "2px solid #e4e7ec",borderRadius:"10px",overflowY:"scroll"}}>
                <div className="header" style={{position:"sticky",top:"0px",left:"0px",padding:"20px",backgroundColor:"white"}}>
                    <h2 className="title">{title}</h2>
                    <p className="subTitle">{subtitle}</p>
                    <h3 className='close-btn' style={{position:"absolute",top:"10px",right:"20px",fontSize:"20px",cursor:"pointer"}} onClick={onClose}>X</h3>
                </div>
                <div className="contents">
                    {children}
                </div>
                <div className="footer" style={{position:"sticky",bottom:"0px",left:"0px",width:"100%"}}>
                    <button style={{width:"100%",padding:"6px",color:"red",backgroundColor:"rgb(224, 180, 180)",cursor:"pointer",border:"none"}}>Withdraw</button>
                </div>
            </div>
        </div>
    </>
  )
}
