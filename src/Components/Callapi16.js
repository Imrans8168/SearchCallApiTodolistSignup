import React, { useEffect } from 'react'
import { useState } from 'react'

const Callapi16 = () => {

        const [items,setItems] = useState([]);

    useEffect(()=>{
        const fetchapi = async()=>{
            const url = "https://jsonplaceholder.typicode.com/todos";
            const res = await fetch(url);
            const data = await res.json();
            setItems(data);
        }
        fetchapi();
    },[])
console.log(items)
  return (
   <>

   {
    items.map((e,ind)=>{
        return <h1>{e.title} <input type="checkbox"  defaultChecked={e.completed}/></h1>
    })
   }
    
   </>
  )
}

export default Callapi16