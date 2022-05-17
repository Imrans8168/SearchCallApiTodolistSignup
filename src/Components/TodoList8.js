import React, { useState } from 'react'

const TodoList8 = () => {

    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);

    const addItem =()=>{
            setItem([...item,input])
    }
    const deleteItem= (id)=>{
        const updatedItem = item.filter((e,ind)=>{
            return id != ind;
        })
        setItem(updatedItem);
    }
  return (
   <>
       <h1>TodoList</h1>
       <input type="text" onChange={e=>setInput(e.target.value)} /> <button onClick={addItem}>+</button>
       {
           item.map((e,ind)=>{
               return(
                   <h1 key={ind}>{e} <button onClick={()=>deleteItem(ind)}>X</button> </h1>
               )
           })
       }
   </>
  )
}

export default TodoList8