import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { storetoken } from '../App'

const ItemsShow = ({ categoryfilter, clothes, uniquecategory }) => {
  const {logout}=useContext(storetoken)
  const {islogin}=useContext(storetoken)
    
  useEffect(() => {
      console.log(islogin)
    }, [islogin]);

  return (
    <>
      <nav className='categorynav'>
        <div className='flex'>
          <img className='searchimg' src='images/madam-fashionLOGO.jpg' alt='not found' />

        </div>
        <ul className='nav'>
          <li><NavLink to="/">Home</NavLink></li>

          {
            uniquecategory.map((ele,i) => {
              return <li key={i}><button onClick={() => categoryfilter(ele)}>{ele}</button></li>

            })
          }
        </ul>
        <div className='flex category'>
          <input type='text' placeholder='SEARCH... ' />
          <img className='searchimg' src='Pimages/search.png' alt='not found' />
          <img className='cartbag' src="Pimages/cartbag.jpg" alt="not found" />

          {
            islogin? <NavLink  onClick={logout} to="/">Logout</NavLink>:<NavLink to="/login">Login</NavLink>
          }
          
        </div>
      </nav>

      <div className='firstdiv'>
        <div className='categoryflex'>
          <img className='firstimg' src='images/backG4BG.png' alt='not found' />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
            <h1 style={{ fontSize: "40px", marginTop: "300px" }}>High On Trend, <span style={{ fontFamily: "PT Sans Narrow, sans-serif", textDecoration: "underline" }}>Low on Costs</span> </h1>
            <NavLink style={{ fontSize: "19px", color: "black", margin: "10px" }} to='/'>Shop &rarr;</NavLink>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "60px", fontSize: "40px" }}>{clothes[0].category}</h1>

      <div className="container">
        {
          clothes.map((ele) => {
            return <div key={ele.id} className='catediv'>
              <img className="categoryimg" src={ele.img} alt="not found" />
              <h4 className="categoryh4">{ele.name}</h4>
              <h4 className="price"> <span className="prevprice">&#8377;{ele.MRP}</span> &#8377;{Math.round(ele.final_price)} <span
                className="discount">{ele.discount}%</span><span><button className="cartadd">Add to cart</button></span>
              </h4>
            </div>
          })
        }
      </div>
    </>
  )
}

export default ItemsShow 
