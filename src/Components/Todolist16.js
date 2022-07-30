import React from 'react'
import { useState } from 'react'

const Todolist16 = () => {

const [input,setInput] = useState();
const [item,setItem] = useState([]);

const addItem =()=>{
    if(!input){

    }
    else{
    
        setItem([...item,input]);
    }
}

const deleteItem =(id)=>{
const updateditem = item.filter((e,ind)=>{
    return id!= ind;
})
setItem(updateditem);
}

  return (
    <>
        <h1>TODLOLIST16</h1>
        <input type="text" onChange={e=>setInput(e.target.value)}/>
        <button onClick={addItem}>+</button>
        {
            item.map((e,ind)=>{
                return <h1 key={ind} >{e}<button onClick={()=>deleteItem(ind)}> X </button></h1>
            })
        }
    </>
  )
}

export default Todolist16