import React, { useState } from 'react'

const TodoList1 = () => {

    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);


    const oninput =(e)=>{
        setInput(e.target.value);
    }
    const addItem = ()=>{
        if(!input){

        }
        else{
            setItem([...item,input]);
            setInput("");
        }
    }
    const deleteItem =(id)=>{

       const updatedItem = item.filter((val,ind)=>{
           return ind !=id;
       });
        setItem(updatedItem);
    }

  return (
    <div>
    <h1>TodoList</h1>
    <input type="text" name='input' value={input} onChange={oninput} /> 
    <button onClick={addItem}>+</button>

   {
        item.map((e,ind)=>{
            return(
                <h1 key={ind}>{e} <button onClick={()=>deleteItem(ind)}>X</button></h1>
                
            );
        })
    }
    </div>
  )
}

export default TodoList1