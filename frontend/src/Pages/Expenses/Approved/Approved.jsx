import React from 'react'
import PaginationTable from '../../../Components/PaginationTable/PaginationTable'

export default function Approved({data,creator}) {
  return (
    <div style={{paddingTop:"40px"}}>
          <PaginationTable creator={creator} data={data.filter((item)=>{return item.status==="Approved"})} status={"Approved"}/>
      </div>
  )
}
