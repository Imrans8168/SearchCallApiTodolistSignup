import React, { useState } from 'react'
import "./basicform.css"
const BasicForm = () => {
    const  [email,setEmail] = useState()
    const [password,setPassword] = useState();

    const [allEntry, setAllEntry] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const newEntry = { email:email,password:password   }

        console.log(newEntry);
        setAllEntry([...allEntry,newEntry])
    }

  return (
    <>
        <div className='container'>
        <form action="" onSubmit={handleSubmit} >
        
            <div className='divinput' >
                <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="Email" className='input' />
            </div>
           
            <div  className='divinput'>
                <input type="password" onChange={e=>setPassword(e.target.value) } placeholder="Password" className='input' /><br/>
            </div>
            <div  className='divinput'>
                <input type="submit" value="Submit" className='btn' />
            </div>
        </form>
        {
            allEntry.map((e,ind)=>{
                return <p key={ind}>UserName : {e.email} Password : {e.password} </p>
            })
        }
        </div>
    </>
  )
}

export default BasicForm