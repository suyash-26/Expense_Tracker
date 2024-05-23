import React from 'react'
import Navigation from '../../Components/NavigationBar/Navigation'
import { Routes, Route, useNavigate } from 'react-router'
import Pending from '../Expenses/Pending/Pending';
import Approved from '../Expenses/Approved/Approved';
import Declined from '../Expenses/Declined/Declined';
import Button from '../../Components/Button/Button';
import "./home.css"
import { Link } from 'react-router-dom';

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
        <div style={{padding:"30px",backgroundColor:"white"}}>
          <p style={{marginBottom:"20px",fontSize:"25px",fontFamily:"monospace"}}>Add all your expenses here</p>
          <Button value="+ Add Expense"/>
        </div>
        <div className='Tabs-Wrapper' style={{padding:"0px 30px 10px 30px"}}>
          <div className="tabs" style={{display:"flex",boxShadow:"1px 2px 2px 2px gray"}}>
            {
              expenseTabs.map((item,index)=>{
                return(<div key={index} className="tab active-line" onClick={()=>{navigate(item.path)}} style={{padding:"6px 20px 6px 20px",backgroundColor:"white",margin:"0px 10px 10px 0px",textAlign:"center",cursor:"pointer"}}>
                  {item.name}
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
          <div className="expenseContents">
            <Routes>
              <Route path=''  element={<Pending/>}/>
              <Route path='pending' element={<Pending/>}/>
              <Route path='approved' element={<Approved/>}/>
              <Route path='declined' element={<Declined/>}/>
            </Routes>
          </div>
        </div>
    </>
  )
}
