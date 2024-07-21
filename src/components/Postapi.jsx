import React, { useEffect, useState } from 'react'

const Postapi = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  async function saveUser(){
    let postdata = {userId, title, body}
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postdata)
    });
    let data = await res.json();
    
    console.log(data)
  }

  
  
  return (
    <>
      <h1>Post API</h1>

      <input type="text" userid="userid" value={userId} onChange={(e)=>{setUserId(e.target.value)}} /><br />
      <input type="text" title="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} /><br />
      <input type="text" body="body" value={body} onChange={(e)=>{setBody(e.target.value)}} /><br /><br />
      <button onClick={saveUser}>submit</button>

    </>
  )
}

export default Postapi;
