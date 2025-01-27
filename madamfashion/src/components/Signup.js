import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Signup = () => {
    const [info, setinfo] = useState('')
    const [style,setstyle]=useState('red')
    const [signupinfo, setsignupinfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const valuechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setsignupinfo({
            ...signupinfo,
            [name]: value
        })
    }

    const submitform = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3001/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupinfo)
        })
        console.log(response)
        if (response.ok) {
            setinfo("Account created successfully.")
            setstyle("green")

            setsignupinfo({
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            })
        }
        else {
            setinfo("Account exist.")
        }
    }
    return (
        <>
            <div className="outerdiv">

                <div className="logindivsignup">

                    <div className="divgreensignup">

                    </div>

                    <div className='formdiv'>
                        <h1 className="loginzara">MD's Fashion - sign up</h1>

                        <form action="" className="logininfosignup" onSubmit={submitform}>

                            <h3>Frist name</h3>
                            <input type="text" onChange={valuechange} value={signupinfo.firstname} name='firstname' placeholder="First name" required />

                            <h3>Last name</h3>
                            <input type="text" onChange={valuechange} value={signupinfo.lastname} name='lastname' placeholder="Last name" required />

                            <h3>Email</h3>
                            <input type="email" onChange={valuechange} value={signupinfo.email} name='email' placeholder="Email" required />

                            <h3>Password</h3>
                            <input type="password" onChange={valuechange} value={signupinfo.password} name='password' placeholder="Password" required />

                            <input className="submit" type="submit" value="Sign up" />
                            <h4 style={{ textAlign: 'center' }}>Have account? <NavLink to='/login'>Login</NavLink></h4>
                            <h4 style={{ textAlign: 'center', color: `${style}`, fontFamily: "sans-serif" }}>{info}</h4>

                        </form>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Signup
