import React, { useState } from 'react'

const Todolist17 = () => {

    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);

const addItem = ()=>{
    if(!input){

    }
    else{
       
        setItem([...item,input])
        setInput("");
    }
}

    const removeItem =(id)=>{
        
        const updatedItem = item.filter((e,ind)=>{
            return id != ind;
        })

        setItem(updatedItem);

    }
  return (
    <>
        <h1>TODOLIST</h1>
        <input type="text" placeholder="add items" onChange={e=>setInput(e.target.value)}/>
        <button onClick={addItem}>add</button>
       {
        item.map((e,ind)=>{
            return <h1 key={ind}>{e} <button onClick={()=>removeItem(ind)} >X</button></h1>
        })
       }
    </>
  )
}

export default Todolist17