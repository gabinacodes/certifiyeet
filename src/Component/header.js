import React from 'react'
import Image from '../pics/image'
import '../styles/modules/header.css'
  

function Header() {
  return (
    <div className='headerBlock'>
        <div>
            <img src={Image.logo}   alt="logo"/>
        </div>
        <nav className='nav'> 
            <a>Home</a>
            <a className='dropdown'>Resources<span className='upArrow'>&#9660;</span><span className='sideArrow'> &#x25B6;</span></a>
          
            <a>Pricing</a>
            <a>Contact us</a>
            <a>Sign in</a>
            <a>Sign up for free</a>
        </nav>
     <div className='drop'>
     <div className='resources'>
                
                <a>Certificate Design</a>
                <a>Bulk Certificate Generate</a>
                <a>AI Genration</a>
                <a>Verify Certificate</a>
            
        </div>
     </div>
        <div>
            <div className='ham'> <img alt='hamburger' src={Image.hamburger}/></div>
            <div className=' btn'>
                <button  className=' btn1'>Sign in</button>
                <button  className=' btn2'>Sign up for free</button>
            </div>
        </div>
    </div>
  )
}

export default Header