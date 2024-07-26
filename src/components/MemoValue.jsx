import React, { useMemo, useState } from 'react'

const MemoValue = () => {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)

  const multiply = useMemo(()=>{
    console.log("hi")
    return add * 10
  }, [add])
  

  return (
    <div>
      <h1>{add}</h1>
      <h2>{multiply}</h2>
      <button onClick={()=>{setAdd(add + 1)}}>Add</button><br /><br />

      <h1>{minus}</h1>
      <button onClick={()=>{setMinus(minus - 5)}}>Add</button>
      
    </div>
  )
}

export default MemoValue;
