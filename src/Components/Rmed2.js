import React, { useEffect, useState } from 'react'

const Rmed2 = () => {
    const [item,setItem]=useState([]);


    useEffect(()=>{
      const fetchapi = async ()=>{
        const url = "https://disease.sh/v3/covid-19/countries"
        const res = await fetch(url);
        const data = await res.json();
        setItem(data);
      }
      fetchapi();
    },[])
  console.log(item);
  
    return (
      <>
        {
          item.map((ele,ind)=>{
            return(
              <h1 key={ind}>{ele.country}</h1>
            )
          })
        }
      </>
    )
}

export default Rmed2