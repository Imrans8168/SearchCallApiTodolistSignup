import React, { useEffect } from 'react'
import { useState } from 'react'

const Search17 = () => {

    const [item,setItem] = useState([]);
    const [output, setOutput] = useState([]);
    const [ input,setInput] = useState("")

    useEffect(()=>{
        const fetchapi = async()=>{
            const url = "https://disease.sh/v3/covid-19/countries";
            const res = await fetch(url);
            const data =  await res.json();
            setItem(data);
        }

        setOutput([]);

        item.filter(e=>{
            if(e.country.toLowerCase().includes(input.toLowerCase())){
                setOutput(output=>[...output,e]);
            }
        })


        fetchapi();
    },[input])

    console.log(item);

  return (
    <>
        <h1>search 17</h1>
        <input type="search"  onChange={e=>setInput(e.target.value)}/>
        {
            output.map((e,ind)=>{
                 return <h1 key={ind}>{e.country}</h1>
            })
        }
    </>
  )
}

export default Search17