import React from 'react'

const Foreachmethod = () => {
    const obj =[
        {
            name:"imran",
            lname:"shaikh"
        },
        {
            name:"ac",
            lname:"shadsdikh"
        },
        {
            name:"xyz",
            lname:"gfr"
        },
        {
            name:"ettr",
            lname:"dgdfgdfg"
        }
    ]
    const rsult=[];

    obj.forEach((e,ind)=>{
        rsult.push(
            <div key={ind}>
            <h1>{e.name}</h1>
            </div>
        )
    })
  return (
    <div>Foreachmethod
        {rsult}
    </div>
  )
}

export default Foreachmethod