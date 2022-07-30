import React, { useState } from 'react'

const BasicForm4 = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const [allEntry,setAllEntry] = useState([]);
    const [edit,setEdit] = useState("");
    

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newEntry = {
            name:name,
            email:email,
        }
        setAllEntry([...allEntry,newEntry]);
    }

    const deleteItem =(id) =>{
        const updatedItem = allEntry.filter((e,ind)=>{
            return id !=ind;
        })
        setAllEntry(updatedItem)
    }

    const editUser =(id)=>{
       
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" placeholder='EnterName' onChange={e=>setName(e.target.value)}/><br/>
            <input type="text" placeholder="Enter Email" onChange={e=>setEmail(e.target.value)} /><br/>

            <button>Add user</button>
        </form>
        {
            allEntry.map((e,ind)=>{
                return(
                    <div key={ind} >
                    <h1>{e.name}</h1>
                    <h3>{e.email}</h3>
                    <button onClick={()=>deleteItem(ind)}>X</button>
                    <button onClick={()=>editUser(ind)}>Edit</button>
                    </div>
                )
            })
        }
    </>
  )
}

export default BasicForm4