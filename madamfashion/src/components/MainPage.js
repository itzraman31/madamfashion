import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storetoken } from '../App';

const MainPage = ({ categoryfilter, uniquecategory, name }) => {
    let { islogin } = useContext(storetoken)
    const Username=localStorage.getItem('name');

    if (Username === null) {
        islogin = false;
    }

    return (
        <>
            <div className="outerdiv">
                <div className='Addiv'>
                    <img className='Adimg' src='Pimages/y.png' alt='youtube img' />
                    <img className='Adimg' src='Pimages/f.png' alt='youtube img' />
                    <img className='Adimg' src='Pimages/insta.webp' alt='youtube img' />
                </div>
                <div className='innerdiv'>
                    <div className="flex1">
                        <div className="flex">
                            <input type='text' placeholder=' SEARCH... ' />
                            <img className='searchimg' src='Pimages/search.png' alt='not found'></img>
                        </div>
                        <div className="flex2">
                            <img className="loginimg" src="Pimages/usericon.jpeg" alt="not found" />
                            {
                                islogin ? <h4 className="afterlogin" >{`Hey, ${Username}`}</h4>:<NavLink title='login' className="login" to="/login">Login</NavLink>
                            }


                            <img className="cartbag" src="Pimages/cartbag.jpg" alt="not found" />
                            <p className="cartbagp">1</p>

                        </div>
                    </div>

                    <div>
                        <h1 style={{ textAlign: "center", marginTop: "20px", fontFamily: "Fenix,serif" }}>Madam-Fashion</h1>
                    </div>

                    <ToastContainer style={{ marginTop: "40px" }} />

                    {/* WOMEN MEN OTHERS FOR NAVBAR START */}
                    <div>
                        <nav>
                            <ul className="nav">
                                {
                                    uniquecategory.map((ele, i) => {
                                        return <li key={i}><NavLink to="category" onClick={() => categoryfilter(ele)}>{ele}</NavLink></li>
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    {/* WOMEN MEN OTHERS FOR NAVBAR END */}

                    {/* SLIDES ON MAINPAGES START */}
                    <div className='slides'>
                    </div>
                    {/* SLIDES ON MAINPAGES END */}

                </div>


                {/* FOOTER START */}
                <footer className='footerdiv'>
                    <img className='footerlogo' src='Pimages/logo.png' alt='logo not found' />
                </footer>
                {/* FOOTER END */}

            </div>

        </>
    )
}

export default MainPage