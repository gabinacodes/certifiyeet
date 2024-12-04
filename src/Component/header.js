import React from 'react'
import Image from '../pics/image'
import '../styles/modules/header.css'
import 
  

function Header() {
  return (
    <div className='headerBlock'>
        <div>
            <img src={Image.logo}   alt="logo"/>
        </div>
        <nav className='nav'> 
            <a href='#.com'>Home</a>
            <a  href='#.com'className='dropdown'>Resources<span className='upArrow'>&#9660;</span><span className='sideArrow'> &#x25B6;</span></a>
          
            <a href='#.com'>Pricing</a>
            <a href='#.com'>Contact us</a>
            <a href='#.com'>Sign in</a>
            <a href='#.com'>Sign up for free</a>
        </nav>
     <div className='drop'>
     <div className='resources'>
                
                <a href='#.com'>Certificate Design</a>
                <a  href='#.com'>Bulk Certificate Generate</a>
                <a href='#.com'>AI Genration</a>
                <a href='#.com'>Verify Certificate</a>
            
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
    {
    
    }
  )
}

export default Header