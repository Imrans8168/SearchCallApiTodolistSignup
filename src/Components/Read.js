import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import { Link } from 'react-router-dom';

import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const Read = () => {

  const [APIData, setAPIData] = useState([]);
  
 useEffect(() => {
        axios.get(`https://62e2d53eb54fc209b8813abf.mockapi.io/users`)
        .then((response) => {
            setAPIData(response.data);
        })
  }, [])

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
  }

  const onDelete = (id) => {    
      axios.delete(`https://62e2d53eb54fc209b8813abf.mockapi.io/users/${id}`)
      .then(() => {
        getData();
    })
  }

  const getData = () => {
    axios.get(`https://62e2d53eb54fc209b8813abf.mockapi.io/users`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}

  console.log(APIData)
  return (
    <div>
       <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>last name</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      

      </Table.Row>
    </Table.Header>

    <Table.Body>      
    {
          APIData.map((data,ind) => {
          return (
                <Table.Row key={ind}>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                    <Link to='/update'><Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell></Link>
                    <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                  </Table.Row>
        )})
   }

    </Table.Body>  
  </Table>
    </div>
  )
}

export default Read