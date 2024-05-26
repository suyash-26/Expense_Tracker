import React from 'react'
import PaginationTable from '../../../Components/PaginationTable/PaginationTable'

export default function Pending({creator}) {
  return (
    <>
      <div style={{paddingTop:"40px"}}>
          <PaginationTable creator={creator} status="Pending"/>
      </div>

    </>
    
  )
}
