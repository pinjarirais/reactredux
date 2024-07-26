import React from 'react'

const Child = ({userdata, funcOne}) => {
  return (
    <div>
      <h1>Child Component</h1>
      <h2>{userdata.fisrtName}</h2>
      <button onClick={()=>{funcOne({user1:"rais", user2:"pinjari"})}}>data</button>
    </div>
  )
}

export default Child
