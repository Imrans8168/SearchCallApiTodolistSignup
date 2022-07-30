import React, { useEffect } from 'react'
import { useState } from 'react'

const Tabelrender3 = () => {

    const [item,setItem] = useState([])

    useEffect(()=>{
        const fetchapi = async()=>{
            const url = "https://jsonplaceholder.typicode.com/todos";
            const res =  await fetch(url);
            const data  = await res.json();
            setItem(data);

        }
        fetchapi()
    },[])
console.log(item);
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserId</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    item.map((e,ind)=>{
                        return(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.userId}</td>
                                <td>{e.title}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Tabelrender3