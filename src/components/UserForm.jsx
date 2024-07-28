import React, { useState } from 'react'
import { inputData } from '../states/reducers/userform'
import { useDispatch } from 'react-redux'
import UserFormData from './UserFormData'


const UserForm = () => {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",    
  })
  //const [formData, setFormData] = useState([]);

  const getValue = (e)=>{
    setUserData({...userData, [e.target.name]:e.target.value, id: new Date().getTime().toString()})    
    //console.log(userData)
  }
  

  

  const formSubmit = (e)=>{
    e.preventDefault()
    // setFormData([...formData, userData])      
    dispatch(inputData(userData)) 
    setUserData({firstName:"", lastName:""})  
  }
  

  return (
    <div style={{padding: "20px"}}>
      <h1>User Form</h1>
      <div><input type="text" name="firstName" value={userData.firstName} onChange={getValue} /></div>
      <div><input type="text" name="lastName" value={userData.lastName} onChange={getValue} /></div>
      <button onClick={formSubmit}>Submit</button>


      <br /><br /><br /><br />

      <UserFormData />

      {/* {
        formData && formData.map((item, index) => {
          return(
          <div key={index}>
            <h2>{item.firstName} {item.lastName}</h2>
          </div>
          )
        })
      } */}


    </div>
  )
}

export default UserForm
