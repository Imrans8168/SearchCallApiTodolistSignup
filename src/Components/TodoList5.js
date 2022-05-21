import React, { useState } from 'react'

const TodoList5 = () => {

    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);
    const oninput =(e)=>{
        setInput(e.target.value);
    }
    const addItem =()=>{
        if(!input){

        }else
        setItem([...item,input])
    }
    const deleteItem =(id)=>{
        const updatedItem = item.filter((val,ind)=>{
            return id != ind;
        })
        setItem(updatedItem);
    }
    console.log(input)
  return (
    <>
        <h1>TodoList</h1>
        <input type="text" onChange={oninput}/> <button onClick={addItem}>+</button>
        {
            item.map((e,ind)=>{
                return(
                    <h1 key={ind}>{e}<button onClick={()=>deleteItem(ind)}>X</button></h1>
                )
            })
        }
    </>
  )
}

export default TodoList5