import React, { useState } from 'react'
import './card.css'
import Modal from '../Modal/Modal'

export default function Card({creator=false,status}) {
    const [modal,setModal] = useState(false);
  return (
    <>
        <div className="cards-wrapper">
            <div className="card-container" onClick={()=>setModal(true)}>
                <div className="row1">
                    <h4>Electronics</h4>
                    <h2>RS 234</h2>
                    <p>Expense Submitted of Rs 234 for Electronics</p>
                    <h4 className='status' style={{color:status==="Approved"?"green":status==="Declined"?"red":"coral"}}>{status}</h4>
                </div>
                <div className="row2">
                    <p>Expense Id: 96879797677575876907897</p>
                    {creator?<p>Created by: Suyash Jaiswal</p>:''}
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
        </div>
        {modal?<Modal onClose={()=>setModal(false)}></Modal>:<></>}
    </>
  )
}
