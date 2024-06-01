import React from 'react'
import PaginationTable from '../../../Components/PaginationTable/PaginationTable'

export default function Declined({data,creator}) {
  const declinedData = data.filter((item)=>{return item.status==="Declined"});
  return (
    <div style={{paddingTop:"40px"}}>
          <PaginationTable creator={creator} data={declinedData} status="Declined"/>
      </div>
  )
}
