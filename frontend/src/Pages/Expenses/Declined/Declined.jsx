import React from 'react'
import PaginationTable from '../../../Components/PaginationTable/PaginationTable'

export default function Declined({data}) {
  return (
    <div style={{paddingTop:"40px"}}>
          <PaginationTable data={data} status="Declined"/>
      </div>
  )
}
