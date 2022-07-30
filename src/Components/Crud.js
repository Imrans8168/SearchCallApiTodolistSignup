import React from 'react'
//import 'semantic-ui-css/semantic.min.css'
import Create from './Create'
import Read from './Read';
import Update from './Update';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

const Crud = () => {
  return (
    <Router>
     <Routes>
        <Route exact path='/' element={<Create/>} />
        <Route exact path='/read' element={<Read/>} />
        <Route exact path='/update' element={<Update/>} />
    </Routes>
    </Router>
  )
}

export default Crud