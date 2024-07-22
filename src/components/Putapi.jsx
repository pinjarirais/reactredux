import React, { useEffect, useState } from 'react'

const PutApi = () => {
  const [userdata, setUserData] = useState([]);
  const [isloader, setIsLoader] = useState(false); 

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [itemId, setItemId] = useState("")
  
  async function getdata(){
    setIsLoader(true)
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await res.json();
    //console.log(data)
    setUserData(data)

    setUserId(data[0].userId)
    setTitle(data[0].title)
    setBody(data[0].body)
    setItemId(data[0].id)

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

const selectUser = (id)=>{
  console.log(userdata[id-1])
  
  let user = userdata[id-1]
  
  setUserId(user.userId)
  setTitle(user.title)
  setBody(user.body)
  setItemId(user.id)

}

const updateData = async ()=>{
  console.log({userId,title,body,itemId});
  const item = {userId,title,body,itemId}

  setIsLoader(true)
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`,{
    method: "PUT",
    headers: {
      "Accept":"application/json",
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(item)
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
            <th bgcolor="lightgray">Update</th>
          </tr>
          { 
           
           userdata && userdata.slice(0,10).map((item)=>{
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title.slice(0,40)}</td>
                  <td>{item.body.slice(0,50)}</td>
                  <td><button onClick={()=>{deleteuser(item.id)}}>Delete</button></td>
                  <td><button onClick={()=>{selectUser(item.id)}}>Update</button></td>
                </tr>
                )
              })            
          }
        </tbody>
      </table>
      }


      <input type="text" userid="userid" value={userId} onChange={(e)=>{setUserId(e.target.value)}}/><br />
      <input type="text" title="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br />
      <input type="text" body="body" value={body} onChange={(e)=>{setBody(e.target.value)}}/><br /><br />
      <button onClick={updateData}>submit</button>

    </>
  )
}

export default PutApi;
