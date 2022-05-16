import React, { useState } from 'react'

const ToDoList2 = () => {

    const [input,setInput] = useState("");
    const [item, setItem] =useState([]);


const oninput =(e) =>{
setInput(e.target.value);
}

const addItem =()=>{
    if(!input){

    }
    else{
        setItem([...item,input]);
    }
}

const deleteItem =(ind)=>{
    const updatedItem = item.filter((val,id)=>{
        return ind != id;
    })
    setItem(updatedItem);
}
console.log(input);

  return (
   <>
       <h1>TODolits2</h1>
       <input type="text" value={input} name="input"  onChange={oninput}/>
       <button onClick={addItem} >+</button>
       {
           item.map((val,ind)=>{
               return(
                   <>
                    <h1 key={ind}>{val} <button onClick={()=>deleteItem(ind)} >X</button></h1>
                   </>
               );
           })
       }
   </>
  )
}

export default ToDoList2