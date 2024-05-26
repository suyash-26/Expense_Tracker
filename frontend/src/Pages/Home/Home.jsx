import React, { useState } from 'react'
import Navigation from '../../Components/NavigationBar/Navigation'
import { Routes, Route, useNavigate } from 'react-router'
import Pending from '../Expenses/Pending/Pending';
import Approved from '../Expenses/Approved/Approved';
import Declined from '../Expenses/Declined/Declined';
import Button from '../../Components/Button/Button';
import "./home.css"
import { Link } from 'react-router-dom';
import MiniTabBar from '../../Components/MiniTabBar/MiniTabBar';
import Modal from '../../Components/Modal/Modal';

export default function Home() {
  const navigate = useNavigate();
  const [addExpenseModal,setExpenseModal] = useState(false);
  const expenseTabs = [
    {
      "name":"Pending",
      "path":"/myexpenses/pending"
    },
    {
      "name":"Approved",
      "path":"/myexpenses/approved"
    },
    {
      "name":"Declined",
      "path":"/myexpenses/declined"
    },
  ]

  return (
    <>
        <Navigation title="Expenses"/>
        <div style={{padding:"30px",backgroundColor:"white"}}>
          <p style={{marginBottom:"20px",fontSize:"25px",fontFamily:"monospace"}}>Add all your expenses here</p>
          <Button value="+ Add Expense" onClick={()=>{setExpenseModal(true)}}/>
        </div>
        <div className='Tabs-Wrapper' style={{padding:"0px 30px 10px 30px"}}>
          {/* <div className="tabs" style={{display:"flex",boxShadow:"1px 2px 2px 2px gray"}}>
            {
              expenseTabs.map((item,index)=>{
                return(<div key={index} className="tab" onClick={()=>{navigate(item.path)}} style={{padding:"6px 20px 6px 20px",backgroundColor:"white",margin:"0px 10px 10px 0px",textAlign:"center",cursor:"pointer"}}>
                  <p className='active-line'>{item.name}</p>
                </div>)
              })
            }
          </div> */}
          <MiniTabBar TABS={expenseTabs}/>
          <div className="expenseContents">
            <Routes>
              <Route path=''  element={<Pending/>}/>
              <Route path='pending' element={<Pending/>}/>
              <Route path='approved' element={<Approved/>}/>
              <Route path='declined' element={<Declined/>}/>
            </Routes>
          </div>
        </div>
        {addExpenseModal && 
          <Modal onClose={()=>setExpenseModal(false)} title="Add Expense" subtitle="Fill the details of your expenses">
            <div className="expense-form" style={{display:'flex',flexDirection:"column",padding:'20px',width:"80%"}}>
              <label for="type" style={{marginTop:"20px"}}>Select Type</label>
              <select id='type' style={{padding:"10px"}}>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
              <label for="amount" style={{marginTop:"20px"}}>Amount</label>
              <input style={{padding:"10px"}} id="amount" type='number' placeholder='Enter the expense amount'></input>
              <label for="description" style={{marginTop:"20px"}}>Amount <span>(Optional)</span></label>
              <input style={{padding:"10px"}} id='description' type='textArea' placeholder='Give some description of expense'></input>
              <label for="docs" style={{marginTop:"20px"}}>Add Attachments</label>
              <input style={{padding:"10px"}} id="docs" type='file'></input>
            </div>
          </Modal>
        }
    </>
  )
}
