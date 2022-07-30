import React, { useEffect } from 'react'
import { useState } from 'react'

const Callapi17 = () => {

    const [item,setItem] = useState([]);

    useEffect(()=>{
        const fethcapi = async ()=>{
            const url ="https://jsonplaceholder.typicode.com/todos";
            const res = await fetch(url);
            const data = await res.json()
            setItem(data);
        }
        fethcapi();
    },[])
    console.log(item)
  return (
    <>
    {
        item.map((e,ind)=>{
            return <h1>{e.title} <input type="checkbox"  defaultChecked={e.completed}/></h1>
        })
    }
    </>
  )
}

export default Callapi17