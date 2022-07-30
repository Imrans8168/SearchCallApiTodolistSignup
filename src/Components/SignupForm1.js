import React, { useState } from 'react'

const SignupForm1 = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");


    const handleSubmit =(e)=>{

        e.preventDefault();
        if(valid()){
            alert("Form Submited Succeccsully");
            setName('');
            setEmail('')
            setPassword('');
        }
    }

    const validatmail = (mail)=>{
        let mailormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail.match(mailormat)){
            return true;
        }
        else
        {
            return false;
        }
    }

    const validatePassword =(p) =>{
        if(
            p.length >=7 &&
            p.length<=14 &&
            /[a-z]/.test(p) &&
            /[A-Z]/.test(p) &&
            /[0-9]/.test(p) &&
            /[^A-za-z0-9]/.test(p)
        ){
            return true;
        }
        else{
            return false;
        }
    }


const valid = ()=>{

    setNameError("")
    setEmailError("")
    setPasswordError("");

    let check = true;

        if(name===""|| name.length<3){
            setNameError("name should be greater than 3")
            check = false;
        }

        if(email==="" || !validatmail(email)){
            setEmailError("Invalid Email")
            check = false;
        }
        if(password==="" || !validatePassword(password)){
            setPasswordError("Invalid Password")
            check = false;
        }
   return check;
}

console.log(name)
console.log(email)
console.log(password)

  return (
    <>

        <h1>SignupForm1</h1>

        <form action="" onSubmit={handleSubmit}>

                <div>
                    <input type="text" placeholder='enter name' onChange={e =>setName(e.target.value)} value={name} />
                    <p>{nameError}</p>
                </div>

                <div>
                    <input type="text" placeholder='enter email' onChange={e =>setEmail(e.target.value)} value={email}/>
                    <p>{emailError}</p>
                </div>

                <div>
                    <input type="text" placeholder='enter password' onChange={e =>setPassword(e.target.value)} value={password} />
                    <p>{passwordError}</p>
                </div>

                <button>Submit</button>

        </form>


    </>
  )
}

export default SignupForm1