import React , { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Navigate,useNavigate } from 'react-router';

import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let history = useNavigate();

    const postData = () => {

        axios.post(`https://62e2d53eb54fc209b8813abf.mockapi.io/users`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
}

  return (
  
    <Form>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={postData} >Submit</Button>
    </Form>
   
  )
}

export default Create