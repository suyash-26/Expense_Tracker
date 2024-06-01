import React, { useRef, useState } from 'react'
import Card from '../Card/Card'
import Modal from '../Modal/Modal';
import { Route, Routes, useNavigate } from 'react-router';

export default function PaginationTable({data,creator,status,actions}) {
  const [modal,setModal] = useState(false);
  const [modalData,setModalData] = useState();
  const Comment_Ref = useRef();
  const navigate = useNavigate();
  return (
    <>
        <div className="table-container">
            {/* <Card data={data} creator={creator} status={status} actions={actions}/> */}
            <div className="cards-wrapper">
                  {
                      data.map((item,index)=>{
                          return(
                            <>
                              <Card creator={creator} actions={actions} item={item} onClick={()=>{setModalData(item); navigate(`/${creator?'myapprovals':'myexpenses'}/${item.status.toLowerCase()}/${item._id}`) }}/>
                            </>
                          )
                      })
                  }
              </div>
        </div>
        <Routes>
          <Route path='/:id' element={modalData?<Modal creator={creator} Ref={Comment_Ref} id={modalData._id} title={modalData._id} subtitle="Review Your Expenses" actions={actions} onClose={()=>{navigate(-1)}}>
            {/* <div className="expense-form" style={{display:'flex',flexDirection:"column",padding:'20px',width:"80%"}}> */}
                <label for="type" style={{fontWeight:'6000'}}>Type:</label>
                <p id='type'>{modalData.type}</p>
                <label for="amount" style={{marginTop:"20px", fontWeight:'6000'}}>Amount:</label>
                <p id="amount">{modalData.amount}</p>
                <label for="desc" style={{marginTop:"20px",fontWeight:'6000'}}>Description:</label>
                <p id="desc" >{modalData.desc}</p>
                <label for="subDate" style={{marginTop:"20px",fontWeight:'6000'}}>Submitted On:</label>
                <p id="subDate" >{modalData.createdAt}</p>
                {
                  !creator && modalData.status!="Pending" && 
                  <>
                    <label for="comments" style={{marginTop:"20px",fontWeight:'6000'}}>Remarks:</label>
                     <p id="comments" >{modalData.comment}</p>
                  </>
                }
                {creator ?<>
                  <label for="emp" style={{marginTop:"20px",fontWeight:'6000'}}>Submitted By:</label>
                  <p id="emp" >{modalData.empId}</p>
                  <label for="comments" style={{marginTop:"20px",fontWeight:'6000'}}>Remarks:</label>
                  {modalData.status==="Pending"?<input type='text' style={{padding:"20px"}} ref={Comment_Ref} placeholder='Enter Remarks'></input>:<p id="comments" >{modalData.comment}</p>}
                </>:<></>}
                <label for="docs" style={{marginTop:"20px"}}>Add Attachments</label>
                {/* <input style={{padding:"10px"}} onChange={handleChange} id="docs" type='file'></input> */}
              {/* </div> */}
          </Modal>:<></>}/>
        </Routes>
    </>
  )
}
