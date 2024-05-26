import React from 'react'
import Card from '../Card/Card'

export default function PaginationTable({creator,status}) {
  return (
    <>
        <div className="table-container">
            <Card creator={creator} status={status}/>
        </div>
    </>
  )
}
