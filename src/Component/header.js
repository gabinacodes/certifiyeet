import React from 'react'
import Image from '../pics/image'
function Header() {
  return (
    <div>
        <div>
            <img src={Image.logo} alt="logo"/>
        </div>
        <div> 
            <a>Home</a>
            <a>Resources</a>
            <a>Pricing</a>
            <a>Contact us</a>
            <a>Sign in</a>
            <a>Sign up for free</a>
        </div>
        <div>
            <div> <img alt='hamburger' src={Image.hamburger}/></div>
            <div>
                <button>Sign in</button>
                <button>Sign up for free</button>
            </div>
        </div>
    </div>
  )
}

export default Header