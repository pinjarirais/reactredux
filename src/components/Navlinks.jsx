import React from 'react'
import { NavLink } from 'react-router-dom';


const Navlinks = () => {
  return (
    <div>
      <ul className='navlinks'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/UserForm">User Form</NavLink></li>
        <li><NavLink to="/UserFormData">User form Data</NavLink></li>
        <li><NavLink to="/Getapi">Get Api</NavLink></li>
        <li><NavLink to="/Postapi">Post Api</NavLink></li>
        <li><NavLink to="/Putapi">Put Api</NavLink></li>
        <li><NavLink to="/Deleteapi">Delete Api</NavLink></li>
        <li><NavLink to="/MemoValue">MemoValue</NavLink></li>
        <li><NavLink to="/LiftingUp">Lifting Up</NavLink></li>
        <li><NavLink to="/Incdec">IncDec</NavLink></li>
        <li><NavLink to="/Hoc">Hoc</NavLink></li> 
      </ul>
    </div>
  )
}

export default Navlinks;
