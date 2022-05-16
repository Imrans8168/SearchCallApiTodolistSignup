import React, { useState } from 'react'
import "./css/signup.css";
const Signup = () => {

    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const [nameError,setNameError] =useState("");
    const [emailError,setEmailError] =useState("");
    const [passwordError,setPasswordError] =useState("");

    const submitForm= (e)=>{
        e.preventDefault();
        if(valid()){
            
                alert(' The form is successfully submitted');
                setName('');
                setEmail('');
                setPassword('');            
        }
    }

    const validateEmail=(mail)=>{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(mail.match(mailformat)){
                return true;
            }else{
                return false;
            }
    }

    const validatePassword =(p)=>{
        if(
            p.length >= 7 &&
            p.length <= 14 &&
            /[a-z]/.test(p) &&
            /[A-Z]/.test(p) &&
            /[0-9]/.test(p) &&
            /[^A-Za-z0-9]/.test(p)
        ) {
                return true;
            }
            else{
                return false;
            }
    }

    const valid =()=>{
       setNameError("");
       setEmailError("");
       setPasswordError("");
       let check = true;

       if(name ===""){
           setNameError("Please Enter the name");
           check =false;
       }
       if(email==="" || !validateEmail(email)){
           setEmailError("Invalid Email");
           check =false;
       }
       if(password==="" || !validatePassword(password)){
           setPasswordError("Please Enter valid Password");
           return false;
       }
       return check;
    }

    console.log(name);
    console.log(email);
    console.log(password);
    return (
        <>
            
            <div className='container'>              
                  <h1>Signup Form</h1>
              
                <div className='inputs'>
                <form>
                    <div>
                        <input type="text" placeholder='Enter Your Name' value={name} onChange={e=>setName(e.target.value)}/>
                        <p style={{color:"red", textAlign:"center"}}>{nameError}</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter your Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                        <p style={{color:"red", textAlign:"center"}}>{emailError}</p>
                    </div>
                    <div>
                        <input type="password" placeholder='Enter Your Password' value={password} onChange={e=>setPassword(e.target.value)}/>
                        <p style={{color:"red", textAlign:"center"}}>{passwordError}</p>
                    </div>
                    <div>
                        <button onClick={submitForm}>Submit</button>
                    </div>
                    </form>
                </div>

                

                

            </div>

        </>
    )
}

export default Signup;