import React, { useEffect, useState } from 'react'

const Count = () => {

    const [postdata, setPostData] = useState([])
    const [loding, setLoding] = useState(false)
    
 useEffect(()=>{
    async function apidata(){
        setLoding(true)
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await res.json()
        setLoding(false)
        setPostData(data);
    }

    apidata()
    
 },[])

 //console.log(postdata)
    
    
  return (
    <>
      <h1>API Call</h1>

        {  loding ? <h1>Loading...</h1> : 
            postdata && postdata.map((item)=>{
                return (
                    <h2>{item.title}</h2>
                )
            })

        }


    </>
  )
}

export default Count
