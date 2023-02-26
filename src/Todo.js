import React from 'react'

export default function Todo(props) {
    
  return (
    <>
    <li>
    <i className="fa-solid fa-circle-minus icon"
    onClick={()=>{
        props.onSelect(props.id)
    }}
    ></i>
    {props.text}
    </li>
    </>
  )
}
