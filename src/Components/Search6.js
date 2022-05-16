import React, { useEffect, useState } from 'react'

const Search6 = () => {

    const [item,setItem]= useState([]);
    const [input,setInput] =useState("");
    const [output,setOutput] = useState([]);

    useEffect(()=>{
        const fetchapi =async()=>{
            const url ="https://disease.sh/v3/covid-19/countries";
            const response = await fetch(url);
            const data = await response.json();
            setItem(data);
        }

            setOutput([]);
            item.filter(e=>{
                if(e.country.toLowerCase().includes(input.toLowerCase()))
                {
                    setOutput(output=>[...output,e])
                }

            })

        fetchapi();
    },[input])



console.log(item)

  return (
    <>
        <input type="search" value={input} onChange={e=>setInput(e.target.value)} />
        {
            output.map((e,ind)=>{
                return <h1 key={ind}>{e.country}</h1>
            })
        }
    </>
  )
}

export default Search6