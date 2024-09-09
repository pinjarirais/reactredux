import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [apidata, setApiData] = useState([])

useEffect(()=>{
   async function getdata(){
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();
        setApiData(data)
        console.log(data)    
        
    }
    getdata()
}, [])



  return (
    <div>
      <h1>Get Api</h1>

        {
            apidata && apidata.map((item)=>{
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <h2>{item.email}</h2>
                        <h2>{item.address.city}</h2>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Demo
