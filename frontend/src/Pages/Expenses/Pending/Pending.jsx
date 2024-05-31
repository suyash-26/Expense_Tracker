import React from 'react'
import PaginationTable from '../../../Components/PaginationTable/PaginationTable'

export default function Pending({data,creator,actions}) {
  return (
    <>
      <div style={{paddingTop:"40px"}}>
          <PaginationTable data={data} creator={creator} status="Pending" actions={actions}/>
      </div>

    </>
    
  )
}
