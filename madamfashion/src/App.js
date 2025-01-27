import React, { createContext, useEffect, useState } from 'react'
import MainPage from './components/MainPage'
import ItemsShow from './components/ItemShow'
import Login from './components/Login';
import Signup from './components/Signup';
import items from './components/Api';
import { Routes, Route } from "react-router-dom";
import Pacfile from './components/Pacfile';

const storetoken = createContext();
function App() {
  const [cat, setcat] = useState(items)
  const [islogin, setislogin] = useState(true)
  const [name, setname] = useState("Login")

  const categoryfilter = (category) => {
    if (category === "All") {
      setcat(items)
      return;
    }
    const filtercategory = items.filter((ele) => {
      return ele.category === category
    })
    setcat(filtercategory)
  }

  const uniquecategory = [...new Set(items.map((ele) => {
    return ele.category
  })), "All"]

  const tokenstoreftn = (values) => {
    localStorage.setItem('token', values.token)
    localStorage.setItem('name', values.name)
    setname(values.name)
    setislogin(true) }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    setislogin(false)
    setname('Login')
    return;
  }
  

  return (
    <>
      <storetoken.Provider value={{ tokenstoreftn, logout, name, islogin }}>

        <Routes>
          <Route path="/" element={<MainPage name={name} categoryfilter={categoryfilter} uniquecategory={uniquecategory} />} />
          <Route path="category" element={<ItemsShow categoryfilter={categoryfilter} clothes={cat} uniquecategory={uniquecategory} />} />

          <Route path="login" key={'login'} element={<Login />} />
          <Route path="signup" key={'signup'} element={<Signup />} />
          <Route path="pacfile" key={'pacfile'} element={<Pacfile />} />


          {/* <Route path="contact" key={'contact'} element={<ItemShow />} /> */}
          {/* <Route path="*" element={<ItemShow />} /> */}
        </Routes>


      </storetoken.Provider>
    </>
  );
}

export default App;
export { storetoken };
