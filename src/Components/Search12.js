import React, { useEffect, useState } from 'react'

const Search12 = () => {

    const [item,setItem] = useState([])
    const [input,setInput] = useState("");
    const [output,setOutput] = useState([]);


    useEffect(()=>{
        const fetchapi = async()=>{
            const url ="https://disease.sh/v3/covid-19/countries";
            const res = await fetch(url);
            const data = await res.json();
            setItem(data);
        } 

        fetchapi();
    },[])

    useEffect(()=>{
        setOutput([])

        item.filter((val,ind)=>{
            if(val.country.toLowerCase().includes(input.toLowerCase())){
                setOutput(output=>[...output,val])
            }
        })
    },[input])

  return (
    <div>
        <input type="text"  onChange={e=>setInput(e.target.value)}  />
       
        {output.map((e,ind)=>{
            return(
                <h1 key={ind}>{e.country}</h1>
            )
        })}
    </div>
  )
}

export default Search12