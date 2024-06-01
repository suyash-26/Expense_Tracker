import React, { useContext, useEffect, useState } from 'react'
import Navigation from '../../Components/NavigationBar/Navigation'
import { Routes, Route, useNavigate } from 'react-router'
import Pending from '../Expenses/Pending/Pending';
import Approved from '../Expenses/Approved/Approved';
import Declined from '../Expenses/Declined/Declined';
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import MiniTabBar from '../../Components/MiniTabBar/MiniTabBar';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

export default function Aprroval() {

  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const [comment,setComment] = useState('');

  useEffect(()=>{
    const fetchData = async(req,res)=>{
      try{
        const r = await axios.get(`/employees//teamApprovals/${user.id}`);
        setData(r.data);
        console.log(r);
      }catch(err){
        throw err;
      }
    }
    fetchData();
  },[])

  const expenseTabs = [
    {
      "name":"Pending",
      "path":"/myapprovals/pending"
    },
    {
      "name":"Approved",
      "path":"/myapprovals/approved"
    },
    {
      "name":"Declined",
      "path":"/myapprovals/declined"
    },
  ]
  const pendingActions = [
    {
      name: "❌ Decline",
      style:{
        color:"red",
        backgroundColor:"rgb(241, 149, 149)",
      },
      onClick: async (id,comment)=>{
        try{
          const res = await axios.put(`/expenses/${id}`,{comment:comment,status:"Declined"});
          navigate('/myapprovals/pending');
          window.location.reload();
          console.log(res);
        }catch(err){
          console.log(err);
        }
      }
    },
    {
      name: "✔️ Accept",
      style:{
        color:"green",
        backgroundColor:"lightgreen",
      },
      onClick:async (id,comment)=>{
        try{
          const res = await axios.put(`/expenses/${id}`,{comment:comment,status:"Approved"});
          navigate('/myapprovals/pending');
          window.location.reload();
          console.log(res);
        }catch(err){
          console.log(err);
        }
      }
    }
  ]

  return (
    <>
        <Navigation title="My Approvals"/>
        <div style={{padding:"30px",backgroundColor:"white"}}>
          <p style={{marginBottom:"20px",fontSize:"25px",fontFamily:"monospace"}}>Review your teams expenses</p>
          {/* <Button value="+ Add Expense"/> */}
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
              <Route path='/*'  element={<Pending data={data} creator={'true'} actions={pendingActions}/>}/>
              <Route path='pending/*' element={<Pending data={data} creator={'true'} actions={pendingActions} />}/>
              <Route path='approved/*' element={<Approved data={data} creator={'true'} />}/>
              <Route path='declined/*' element={<Declined data={data} creator={'true'} />}/>
            </Routes>
          </div>
        </div>
    </>
  )
}
