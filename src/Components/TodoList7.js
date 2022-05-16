import React, { useState } from 'react'

const TodoList7 = () => {
    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);


    const oninput =(e)=>{
        setInput(e.target.value);
    }
    const addItem = ()=>{
        if(!input){

        }
        else
        setItem([...item,input])
        setInput("")
    }
    const deleteItem=(ind)=>{
        const updatedItem = item.filter((e,id)=>{
            return ind != id;
        })
        setItem(updatedItem);
    }


console.log(input)
console.log(item)
  return (
   <>
        <h1>Todollist</h1>
       <input type="text" onChange={oninput} value={input} /> <button onClick={addItem}>+</button>
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

export default TodoList7