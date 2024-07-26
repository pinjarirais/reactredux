import React, { useState } from 'react'
import Child from './Child'

const LiftingUp = () => {
    const [count, setCount] = useState(0);
    const [childData, setChildData] = useState();

    let obj = {
        fisrtName: "User",
        lastName: "User2",
        age: 20
    }

    function one(data){
         let newdata = data;         
         setChildData(newdata)
         
    }

    
    
  return (
    <div>
        <Child userdata={obj} funcOne={one} />
        
        
        <div>
            <h3>{childData?.user1}</h3>
            <h3>{childData?.user2}</h3>
        </div>
        

      <h1>{count}</h1>
      <button onClick={()=>{setCount(count + 1)}}>Add</button>
    </div>
  )
}

export default LiftingUp
