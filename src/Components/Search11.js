import React, { useEffect, useState } from 'react'

const Search11 = () => {

    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);
    const [output,setOutput] = useState([]);

    useEffect(()=>{
        const fetchapi = async()=>{
            const url ="https://disease.sh/v3/covid-19/countries";
            const res = await fetch(url)
            const data = await res.json();
            setItem(data)
        }

        setOutput([]);
        item.filter((e,ind)=>{
            if(e.country.toLowerCase().includes(input.toLowerCase())){
                setOutput(output=>[...output,e]);
            }
        })


        fetchapi();

    },[input]);

    console.log(item);
  return (
    <>
        <h1>Search</h1>
        <input type="text" onChange={e=>setInput(e.target.value)}/>
       {
           output.map((e,ind)=>{
               return(
                   <h1 key={ind}>{e.country}</h1>
               )
           })
       }
    </>
  )
}

export default Search11