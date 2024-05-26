import React from 'react'
import "./button.css"

export default function Button({value,onClick,styles}) {
  return (
        <>
            <div>
                <button className='btn' onClick={onClick} style={{padding:"8px 10px 8px 10px",cursor:"pointer",...styles}}>{value}</button>
            </div>
        </>
  )
}
