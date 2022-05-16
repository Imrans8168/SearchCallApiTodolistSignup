import React, { useEffect, useState } from 'react'

const Callapi4 = () => {

    const [item,setItem] =useState([]);


    useEffect(()=>{
        const fetchapi = async ()=>{
            const url ="https://jsonplaceholder.typicode.com/todos";
            const response = await fetch(url);
            const data = await response.json();
            setItem(data);
        
        }
        fetchapi();
    },[])

    console.log(item);
  return (
    <>
        {
            item.map((e,ind)=>{
                return(
                    <div key={ind}>
                        <span>{e.title}</span> <input type="checkbox" defaultChecked= {e.completed} />
                    </div>
                )
            })
        }
    </>
  )
}

export default Callapi4;