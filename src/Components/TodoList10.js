import React from 'react'
import { useState } from 'react'

const TodoList10 = () => {
    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);


    const addItem = ()=>{
        if(!input){

        }else{
              setItem([...item,input])
              setInput(" h");
        }
    }
    const deleteItem =(id)=>{
        const updatedItem = item.filter((e,ind)=>{
            return id != ind;
        })
        setItem(updatedItem)
    }
  return (
    <>
        <h1>Todolist10</h1>
        <input type="text" onChange={e=>setInput(e.target.value)}/>
        <button onClick={addItem} >+</button>
        {
            item.map((e,ind)=>{
                return(
                    <h1 key={ind}>{e} <button onClick={()=>deleteItem(ind)}>X</button></h1>
                )
            })
        }
    </>
  )
}

export default TodoList10