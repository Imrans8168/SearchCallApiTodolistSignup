import React, { useEffect, useState } from 'react'

const Search8 = () => {

    const [input,setInput] =useState("");
    const [item,setItem] =useState([]);
    const [output,setOutput] = useState([]);


    useEffect(()=>{
        const fetchapi =async()=>{
            const url ="https://disease.sh/v3/covid-19/countries";
            const res =await fetch(url);
            const data = await res.json();
            setItem(data);
        }
        setOutput([]);
        item.filter(val=>{
            if(val.country.toLowerCase().includes(input.toLowerCase())){
                setOutput(output=>[...output,val])
            }
        })    
        fetchapi();
    },[input])

  return (
    <>
        <input type="search" onChange={e=>setInput(e.target.value)}/>
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

export default Search8