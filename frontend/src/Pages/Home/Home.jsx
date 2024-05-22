import React from 'react'
import Navigation from '../../Components/NavigationBar/Navigation'
import { Routes, Route, useNavigate } from 'react-router'
import Pending from '../Expenses/Pending/Pending';
import Approved from '../Expenses/Approved/Approved';
import Declined from '../Expenses/Declined/Declined';
import { BrowserRouter } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
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
        <h1>This is Home Page</h1>
        <div>
          <button>+ Add Expense</button>
        </div>
        <div className='Tabs-Wrapper' style={{padding:"30px"}}>
          <div className="tabs" style={{display:"flex"}}>
            {
              expenseTabs.map((item)=>{
                return(<div className="tab" onClick={()=>{navigate(item.path)}} style={{padding:"6px 20px 6px 20px",backgroundColor:"white",margin:"10px",textAlign:"center",cursor:"pointer"}}>
                  {item.name}
                </div>)
              })
            }
          </div>
          <div className="expenseContents">
            <Pending/>
            <Routes>
              <Route path='/myexpenses' element={<Pending/>}/>
              <Route path='/myexpenses/pending' element={<Pending/>}/>
              <Route path='/myexpenses/approved' element={<Approved/>}/>
              <Route path='/myexpenses/declined' element={<Declined/>}/>
            </Routes>
          </div>
        </div>
    </>
  )
}
