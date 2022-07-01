import React from 'react'

const Foreach2 = () => {

    const person =[
        {
            name:"imran",
            id:3,
            lname:"shaikh",
        },
        {
            name:"asft",
            id:8,
            lname:"shaikh",
        },
        {
            name:"asdf",
            id:3,
            lname:"shaikh",
        },
        {
            name:"sss",
            id:3444,
            lname:"bbbb",
        },
    ]

    const newarr =[];

    person.forEach((e,ind)=>{
        newarr.push(
            <div key={ind}>
            <h1>{e.name}{e.id}</h1>
            </div>
        )
    })

  return (
    <div>{newarr}</div>
  )
}

export default Foreach2