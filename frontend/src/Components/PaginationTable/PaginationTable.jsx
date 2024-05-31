import React from 'react'
import Card from '../Card/Card'

export default function PaginationTable({data,creator,status,actions}) {
  return (
    <>
        <div className="table-container">
            <Card data={data} creator={creator} status={status} actions={actions}/>
        </div>
    </>
  )
}
