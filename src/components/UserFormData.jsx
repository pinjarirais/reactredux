import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../states/reducers/userform'

const UserFormData = () => {
    const userdata = useSelector((state)=>state.userform.users)
    const dispatch = useDispatch()
    console.log(userdata)

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

  return (
    <div>
      <h1>Redux User Form Data</h1>

      {
        userdata.map((item, index)=>(
            <h2 key={index} className='user'>
                <span>{item.firstName}, {item.lastName}</span>
                <span onClick={()=>{deleteUser(item.id)}} className='removeuser'>Remove</span>
            </h2>
        ))
      }

    </div>
  )
}

export default UserFormData
