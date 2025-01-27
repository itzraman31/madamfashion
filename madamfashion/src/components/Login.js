import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storetoken } from '../App'; const url = "http://localhost:3001/api/auth/login"

const Login = () => {

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
      body: JSON.stringify(logininfo),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (response.ok) {
      const values = await response.json();
      tokenstoreftn(values);

      setinfo("Login successfully.")
      setstyle("green")

      toast.success(`Welcome ${values.name}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      setTimeout(() => {
        navigate('/')
      }, 500);

    }
    else {
      setinfo("Invalid credentials.")
    }
  }

  const changevalue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setlogininfo({
      ...logininfo,
      [name]: value
    })
  }

  return (
    <>
      <div className="loginouterdiv">

        <div className="logindiv">

          <div className="divgreen">
          </div>
          <div className='formdiv'>
            <h1 className="loginzara">MD's Fashion - login</h1>

            <form action="" className="logininfo" onSubmit={submitform} >
              <h3>Email</h3>

              <input type="email" onChange={changevalue} value={logininfo.email} name='email' placeholder="Email" required />

              <h3>Password</h3>

              <input type="password" onChange={changevalue} value={logininfo.password} name='password' placeholder="Password" required />

              <input className="submit" type="submit" value="Login" />

              <h4 style={{ textAlign: "center" }}>Don't have account <NavLink to="/signup">Sign up</NavLink></h4>
              <h4 style={{ textAlign: 'center', color: `${style}`, fontFamily: "sans-serif" }}>{info}</h4>
            </form>

          </div>


        </div>

      </div>
    </>
  )
}

export default Login
