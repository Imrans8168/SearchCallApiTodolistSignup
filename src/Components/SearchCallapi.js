import React, { useEffect, useState } from 'react'

const SearchCallapi = () => {

    const [item,setItem] = useState([]);

    const [input,setInput] =useState('');
    const [output,setOutput]= useState([]);

   useEffect(()=>{

       const fetchapi = async ()=>{

        const url ="https://disease.sh/v3/covid-19/countries";
        const  response = await fetch(url);
        const data =  await response.json();
        setItem(data);
       }
       fetchapi();
   },[])

   useEffect(()=>{
    setOutput([]);
        item.filter(val =>{
            if(val.country.toLowerCase().includes(input.toLocaleLowerCase()))
            {
                setOutput(output=>[...output,val]);
            }
        })

   },[input])
    
   console.log(item);
  return (
  <>
    
      <input type="search" onChange={e=> setInput(e.target.value)} />
     {
        output.map((e,ind)=>{
            return(
                <div key={ind}>
                <h1>{e.country}</h1>
                </div>
            );
        })
     }
  </>
  )
}

export default SearchCallapi;