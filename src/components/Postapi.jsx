import axios from 'axios'
import React, {useState } from 'react'

const Postapi = () => {
  // const [userId, setUserId] = useState("");
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const [form, setForm] = useState({
    userid: "",
    title: "",
    body: ""
  })

  
  

  const handleOnChange = (e)=>{
    setForm({...form, [e.target.name]:e.target.value})
    //console.log(form)
  }
  

  async function saveUser(){
    console.log(form)
    axios.post("https://jsonplaceholder.typicode.com/posts", form)
    .then((res)=>{
      console.log(res.data)
    })
    // let postdata = {userId,title,body}
    // let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers:{
    //     "Accept":"application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(postdata)
    // });
    // let data = await res.json();
    
    // console.log(data)
  }

  
  
  return (
    <>
      <h1>Post API</h1>

      <input type="text" name="userid" value={form.userid} onChange={handleOnChange} /><br />
      <input type="text" name="title" value={form.title} onChange={handleOnChange} /><br />
      <input type="text" name="body" value={form.body} onChange={handleOnChange} /><br /><br />
      <button onClick={saveUser}>submit</button>

    </>
  )
}

export default Postapi;







