import React, { useState } from 'react'


const TodoList3 = () => {

    const [input,setInput] =useState("");
    const [item,setItem] =useState([]);

    const oninput = (e)=>{
        setInput(e.target.value);
    }
    const addItem =()=>{
        setItem([...item,input])
    }

    const deleteItem =(id)=>{
        const updatedItem = item.filter((val,ind)=>{
            return id != ind;
        })
        setItem(updatedItem);
    }


  return (
    <>
        <h1>todolist3</h1>
        <input type="search" value={input} name="input" onChange={oninput}/>
        <button type='submit' onClick={addItem} >Submit</button>
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

export default TodoList3