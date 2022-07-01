import React from 'react'
import Data from './Data';
const App = () => {

  console.log(Data);

  return (
    <>
     {
       Data.map((e,ind)=>{
         return(
           <div>
              <h1>name   -{e.name}</h1>
              <h1>year  -{e.year}</h1>
              <h1>Budget  -{e.Budget}</h1>
              <h1>Cast   -{e.Cast}</h1>
              <h1>Reviews - {e.Reviews}</h1>
              <h1>Language - {e.Language}</h1>
              <hr/>
           </div>
         )
       })
     }
    </>

  )
}

export default App