import React from 'react';
import "./Nav.css"
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare}  from "react-icons/fa"

const Nav = () => {
    return<> <nav className='Main.nav'>
        <div className='float-container'>
         <div className='float-child'>
            <h2>
                <span>A</span>kshat
                <span>T</span>echnical
            </h2>

         </div>
         <div className='float-child'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
         </div>
        </div>
        <div className='social-media-desktop'>
            <ul>
            <li>
                    <a 
                    href='https://www.youtube.com/@ThapaTechnical' target='
                    -Akshat'>
                        <FaFacebookSquare className='Facebook'/>
                    </a>
                </li>
                <li>
                    <a 
                    href='https://www.youtube.com/@ThapaTechnical' target='
                    -Akshat'>
                        <FaInstagramSquare className='Instagram'/>
                    </a>
                </li>
                <li>
                    <a 
                    href='https://www.youtube.com/@ThapaTechnical' target='
                    -Akshat'>
                        <FaYoutubeSquare className='Youtube'/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <section className='hero-section'>
        <p>Welcome to</p>
        <h1> Akshat Ecommerce website</h1>


    </section>
    </>
}

export default Nav;