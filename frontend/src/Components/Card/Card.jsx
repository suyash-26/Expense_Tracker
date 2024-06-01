import React, { useState } from 'react'
import './card.css'
import Modal from '../Modal/Modal'

export default function Card({creator,actions,item,onClick}) {
    const [modal,setModal] = useState(false);
    const [modalData,setModalData] = useState();
    return (
            <>
                <div className="card-container" onClick={onClick}>
                    <div className="row1">
                        <p>{item.type}</p>
                        <h2>RS {item.amount}</h2>
                        <p>Expense Submitted of Rs {item.amount} for {item.type}</p>
                        <h4 className='status' style={{color:item.status==="Approved"?"green":item.status==="Declined"?"red":"coral"}}>{item.status}</h4>
                    </div>
                    <div className="row2">
                        <p>Expense Id: {item._id}</p>
                        {creator?<p>Created by: Suyash Jaiswal</p>:''}
                        <p>Expense Submitted on: {item.createdAt}</p>
                    </div>
                </div>
            </>
    )
        // {/* <div className="cards-wrapper">
        //     {
        //         data.map((item,index)=>{
        //             return(
        //                 <>
        //                     <div className="card-container" onClick={()=>{setModalData(item); setModal(true)}}>
        //                     <div className="row1">
        //                         <p>{item.type}</p>
        //                         <h2>RS {item.amount}</h2>
        //                         <p>Expense Submitted of Rs {item.amount} for {item.type}</p>
        //                         <h4 className='status' style={{color:item.status==="Approved"?"green":item.status==="Declined"?"red":"coral"}}>{item.status}</h4>
        //                     </div>
        //                     <div className="row2">
        //                         <p>Expense Id: {item._id}</p>
        //                         {creator?<p>Created by: Suyash Jaiswal</p>:''}
        //                         <p>Expense Submitted on: {data[0].createdAt}</p>
        //                     </div>
        //                 </div>
        //                 </>
        //             )
        //         })
        //     }
        // </div> */}
        // {modal?<Modal title={modalData.amount} subtitle={modalData.type} actions={actions} onClose={()=>setModal(false)}>

        // </Modal>:<></>}
    // </>
}
