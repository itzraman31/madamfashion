import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storetoken } from '../App'; const url = "http://localhost:3001/api/auth/Pacfile"

const Pacfile = () => {

  const { tokenstoreftn } = useContext(storetoken)

  const [info, setinfo] = useState("")
  const [style, setstyle] = useState('red')

  const navigate = useNavigate();
  const [logininfo, setlogininfo] = useState({
    email: "",
    password: ""
  })

  const submitform = async (event) => {
    event.preventDefault()

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(""),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (response.ok) {
      const values = await response.json();
      tokenstoreftn(values)
      console.log(values)
    }
    else {
      setinfo("Invalid credentials.")
    }
  }
  function FindProxyForURL(url, host) {
    console.log("Hello")
    // Block Facebook and Amazon
    if ((host === "facebook.com") ||
        (host === "www.facebook.com") ||
        (host === "amazon.com") ||
        (host === "www.amazon.com"))
         {
        return "PROXY 0.0.0.0:80"; // Replace with an IP address that doesn't exist
        // return;
    }

    // Allow all other connections
    return "Direct";
}
useEffect(()=>{FindProxyForURL("www.facebook.com","www.facebbok.com")},[])

  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default Pacfile
