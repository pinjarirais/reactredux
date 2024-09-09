import React, { useState } from 'react'
import jsondata from  "./userdata.json"

const Home = () => {    
  const [val, setVal] = useState();
  const [data, setData] = useState(jsondata);
  const [newdata, setNewData] = useState(data);

  const handleOnchange = (e)=>{
    //console.log(e.target.value)
    setVal(e.target.value)  

    if(e.target.value){
      let result = newdata.filter((item)=>{
        return item.name.toLowerCase().includes(e.target.value.toLowerCase())}
      ) 
      setData(result)
    }else{
      setData(newdata)
    }
    
  }


  return (
    <div>
      <div><input placeholder='search' value={val} type="text" onChange={handleOnchange} /></div>

      {

          data && data.map((item)=>{
            return(
              <h2 key={item.id}>{item.name}</h2>
            )
          })

      }

    </div>
  )
}

export default Home;
