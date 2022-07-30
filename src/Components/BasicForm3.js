import React, { useState } from 'react'
import "./basicform3.css"

const BasicForm3 = () => {

    const [fname,setFirstName] = useState("");
    const [lname,setLastName] = useState("")
    const [number,setNumber] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState();

const [allEntry,setAllEntry] = useState([]);



    const handleSubmit = (e)=>{
        e.preventDefault();
        const newEntry = {
            fname:fname,
            lname:lname,
            number:number,
            email:email,
            password:password,
        }

        setAllEntry([...allEntry,newEntry])

    }

  return (
    <>
        <div className='container'>
            <form action="" onSubmit={handleSubmit}>

            <div className='inputdiv'>
                <input type="text" placeholder="enter first name" onChange={e => setFirstName(e.target.value)} />
            </div>

            <div className='inputdiv'>
                <input type="text" placeholder="enter last name" onChange={e => setLastName(e.target.value)}/>
            </div>

            <div className='inputdiv'>
                <input type="number" placeholder="enter mobile number" onChange={e => setNumber(e.target.value)}/>
            </div>

            <div className='inputdiv'>
                <input type="email" placeholder="enter Email" onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='inputdiv'>
                <input type="password" placeholder="enter password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='inputdiv'>
                 <button className='btn'>Submit</button>
            </div>
            </form>
            </div>
            <div className='showdata'>
                {
                    allEntry.map((e,ind)=>{
                        return <div key={ind}> 

                            <p> First name : {e.fname}  </p>
                            <p> Last  name : {e.lname}  </p>
                            <p> Mobile nu : {e.number}  </p>
                            <p> Email : {e.email}  </p>
                            <p> Password : {e.password}  </p>
                            <hr/>
                            </div>
                    })
                }
            </div>
      

    </>
  )
}

export default BasicForm3