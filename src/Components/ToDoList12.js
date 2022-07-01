import React, { useState } from 'react'

const ToDoList12 = () => {

  const [input,setInput] = useState("");
  const [item,setItem]  = useState([]);

const addItem =()=>{
  if(!input){

  }
  else{
    setItem([...item,input]);
    setInput("");
  }
}
const deleteItem =(ind)=>{
  const updatedItem = item.filter((e,id)=>{
    return ind != id;
  })
  setItem(updatedItem);
}
  return (
    <div>
      <h1>TodoList12</h1>
      <input type="text" onChange={e=>setInput(e.target.value)}/>
     
      <button onClick={addItem}>+</button>
      {
        item.map((e,ind)=>{
          return(
            <h1 key={ind}>{e} <button onClick={()=>deleteItem(ind)} >X</button></h1>
          )
        })
      }
    </div>
  )
}

export default ToDoList12