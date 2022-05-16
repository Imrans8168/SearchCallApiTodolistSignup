import React, { useEffect, useState } from "react";

const App =()=>{  
  const [item,setItem] = useState([]);
  useEffect(()=>{
    const fetchapi = async ()=>{
      const url = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(url);
      const data =await response.json();
      setItem(data);
    }
    fetchapi();
  },[]) 

  return(
          <>
              {
                item.map((e,index)=>{
                  return(
                    <div key={index}>
                      <span>{e.title}</span><input type="checkbox" defaultChecked={e.completed} />
                    </div>
                  );
                })
              }
          </>
  )
}

export default App;