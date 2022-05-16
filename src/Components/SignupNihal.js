import React from 'react';
import { useState } from 'react';
import './index.css';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (valid()) {
            alert(' The form is successfully submitted');
            setName('');
            setEmail('');
            setPassword('');
        }
    };
    function ValidateEmail(mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }

    function CheckPassword(p) {
        if (
            p.length >= 7 &&
            p.length <= 14 &&
            /[a-z]/.test(p) &&
            /[A-Z]/.test(p) &&
            /[0-9]/.test(p) &&
            /[^A-Za-z0-9]/.test(p)
        ) {
            return true;
        } else {
            return false;
        }
    }

    const valid = () => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
        let check = true;
        if (name === '') {
            setNameError('please enter the name');
            check = false;
        }
        if (email === '' || !ValidateEmail(email)) {
            setEmailError('Invalid Email');
            check = false;
        }
        if (password === '' || !CheckPassword(password)) {
            setPasswordError('invalid password');
            check = false;
        }

        return check;
    };
    return (
        <>
            <div className="background">
                <div class="container">
                    <div class="screen">
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <div >
                                        Form <br /> Validation <br />
                                    </div>
                                </div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input
                                            type="text" class="app-form-control"
                                            placeholder="Enter name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <p style={{ color: 'red',fontSize:"15px" }}>{nameError}</p>
                                    </div>
                                    <div class="app-form-group">
                                        <input
                                            type="Email" class="app-form-control"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <p style={{ color: 'red',fontSize:"15px"  }}>{emailError}</p>
                                    </div>
                                    <div class="app-form-group">
                                        <input
                                            type="text" class="app-form-control"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <p style={{ color: 'red' ,fontSize:"15px"  }}>{passwordError}</p>
                                    </div>

                                    <div>
                                        <button   class="app-from-button" onClick={submitForm}>Submit</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Signup;