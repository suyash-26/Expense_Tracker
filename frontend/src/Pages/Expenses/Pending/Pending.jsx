import React from 'react'
import PaginationTable from '../../../Components/PaginationTable/PaginationTable'
import axios from 'axios';

export default function Pending({data,creator,actions}) {


  return (
    <>
      <div style={{paddingTop:"40px"}}>
          <PaginationTable data={data.filter((item)=>{return item.status==="Pending"})} creator={creator} status="Pending" actions={actions}/>
      </div>

    </>
    
  )
}
