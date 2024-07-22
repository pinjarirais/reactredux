import React, { useEffect, useState } from 'react'

const DeleteApi = () => {
  const [userdata, setUserData] = useState([]);
  const [isloader, setIsLoader] = useState(false); 
  
  async function getdata(){
    setIsLoader(true)
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await res.json();
    setUserData(data)
    setIsLoader(false)
    //console.log(userdata)
  }

  useEffect(()=>{    
    getdata()
  },[]);

  const deleteuser = async (id)=>{
    //console.log(id)
    setIsLoader(true)
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: "DELETE"
    })
    let data = await res.json();
    setUserData(data)    
    setIsLoader(false)
    //console.log(userdata)
    getdata()
  
}
  
  return (
    <>
      <h1>Delete API</h1>
      { isloader ? <h1>Loading...</h1> :
      <table border="1" cellPadding="10" cellSpacing="1">
        <tbody>
          <tr>
            <th bgcolor="lightgray">ID</th>
            <th bgcolor="lightgray">Title</th>
            <th bgcolor="lightgray">Body</th>
            <th bgcolor="lightgray">Delete</th>
          </tr>
          { 
           
           userdata && userdata.map((item)=>{
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title.slice(0,40)}</td>
                  <td>{item.body.slice(0,50)}</td>
                  <td><button onClick={()=>{deleteuser(item.id)}}>Delete</button></td>
                </tr>
                )
              })            
          }
        </tbody>
      </table>
      }

    </>
  )
}

export default DeleteApi;
