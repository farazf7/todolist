import './App.css'
import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

function App() {

  const [inputlist, setinputlist] = useState("")
  const [items, setitems] = useState([])

  const OnChange=(V)=>{
    setinputlist(V.target.value)
  }

  const Add=(V)=>{
    setitems((olditems)=>{
      return [...olditems, inputlist]
    })
    setinputlist("")
  }

  const deleteitem = (id) =>{
    console.log("deleted");
    setitems((olditems)=>{
      return olditems.filter((arrayele,index)=>{
        return index!==id;
      })
    })
}
  

  // ---------------RETURN------------------------
  return (
    <>
    <div className='main-div'>
      <div className='center-div'>
        <h1>TODO LIST</h1>

        <div className='inp-btn'>
        <input 
        type="text" 
        placeholder='Add a Item'
        onChange={OnChange}
        value={inputlist}
        />

        <button 
        className='btn btn-success'
        onClick={Add}
        >+</button>
        </div>

        <div className='items'>
        <ul>
          {/* <li>{items}</li> */}
          {items.map((itemsValue,index)=>{
           return <Todo 
           text={itemsValue}
           key={index}
           id={index}
           onSelect={deleteitem}
           />
          })}
        </ul>
        </div>

      </div>
    </div>
    </>
  ); 
}

export default App;
