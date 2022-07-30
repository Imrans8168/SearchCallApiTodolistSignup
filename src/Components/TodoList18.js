import React, { useState } from 'react'

const TodoList18 = () => {

    const [item,setItem] = useState([])
    const [input,setInput] = useState()

  
    const addItem = ()=>{
        if(!input){

        }
        else{
            setItem([...item,input])
            setInput('')
        }
    }

    const removeItem = (id)=>{
        const updatedItem =item.filter((e,ind)=>{
            return id != ind;
        })
        setItem(updatedItem);

    }

  return (
    <>
        <h1>Todlolist 18</h1>
        <input type="text" onChange={e =>setInput(e.target.value)} />
        <button onClick={addItem}> +</button>
        {
            item.map((e,ind)=>{
                return <h1 key={ind}>{e} <button onClick={()=>removeItem(ind)} >X</button></h1>
            })
        }
    </>
  )
}

export default TodoList18