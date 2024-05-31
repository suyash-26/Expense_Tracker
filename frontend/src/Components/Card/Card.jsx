import React, { useState } from 'react'
import './card.css'
import Modal from '../Modal/Modal'

export default function Card({data,creator=false,status,actions}) {
    const [modal,setModal] = useState(false);
  return (
    <>
        <div className="cards-wrapper">
            {
                data.map((item,index)=>{
                    return(
                        <>
                            <div className="card-container" onClick={()=>setModal(true)}>
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
                })
            }
            {/* <div className="card-container" onClick={()=>setModal(true)}>
                <div className="row1">
                    <p>{data[0].type}</p>
                    <h2>RS {data[0].amount}</h2>
                    <p>Expense Submitted of Rs {data[0].amount} for {data[0].type}</p>
                    <h4 className='status' style={{color:data[0].status==="Approved"?"green":data[0].status==="Declined"?"red":"coral"}}>{data[0].status}</h4>
                </div>
                <div className="row2">
                    <p>Expense Id: {data[0]._id}</p>
                    {creator?<p>Created by: Suyash Jaiswal</p>:''}
                    <p>Expense Submitted on: {data[0].createdAt}</p>
                </div>
            </div>
            <div className="card-container">
                    <div className="row1">
                        <p>Electronics</p>
                        <h2>RS 234</h2>
                        <p>Expense Submitted of Rs 234 for Electronics</p>
                    </div>
                    <div className="row2">
                        <p>Expense Id: 96879797677575876907897</p>
                        <p>Expense Submitted on: 22 May 2023 10:24 pm</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="row1">
                        <p>Electronics</p>
                        <h2>RS 234</h2>
                        <p>Expense Submitted of Rs 234 for Electronics</p>
                    </div>
                    <div className="row2">
                        <p>Expense Id: 96879797677575876907897</p>
                        <p>Expense Submitted on: 22 May 2023 10:24 pm</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="row1">
                        <p>Electronics</p>
                        <h2>RS 234</h2>
                        <p>Expense Submitted of Rs 234 for Electronics</p>
                    </div>
                    <div className="row2">
                        <p>Expense Id: 96879797677575876907897</p>
                        <p>Expense Submitted on: 22 May 2023 10:24 pm</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="row1">
                        <p>Electronics</p>
                        <h2>RS 234</h2>
                        <p>Expense Submitted of Rs 234 for Electronics</p>
                    </div>
                    <div className="row2">
                        <p>Expense Id: 96879797677575876907897</p>
                        <p>Expense Submitted on: 22 May 2023 10:24 pm</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="row1">
                        <p>Electronics</p>
                        <h2>RS 234</h2>
                        <p>Expense Submitted of Rs 234 for Electronics</p>
                    </div>
                    <div className="row2">
                        <p>Expense Id: 96879797677575876907897</p>
                        <p>Expense Submitted on: 22 May 2023 10:24 pm</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="row1">
                        <p>Electronics</p>
                        <h2>RS 234</h2>
                        <p>Expense Submitted of Rs 234 for Electronics</p>
                    </div>
                    <div className="row2">
                        <p>Expense Id: 96879797677575876907897</p>
                        <p>Expense Submitted on: 22 May 2023 10:24 pm</p>
                    </div>
                </div> */}
        </div>
        {modal?<Modal actions={actions} onClose={()=>setModal(false)}></Modal>:<></>}
    </>
  )
}
