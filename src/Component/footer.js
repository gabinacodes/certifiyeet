import React from 'react'
import '../styles/modules/footer.css'
import Image from '../pics/image'
function footer() {
  return (
    <div className='footer'>
        <div className='topFooter'>
            <div className='Resources'>
                <h6>Resources</h6>
                <p>Certificate design</p>
                <p>Bulk Certificate Generate</p>
                <p>Telecommunication Intergration</p>
                <p>Vertify Certificate</p>
            </div>
            <div className='Information'>
                <h6>Information</h6>
                <p>Pricing</p>
                <p>FAQ</p>
            </div>
            <div className='company'>
                <h6>Company</h6>
                <p>Contactus</p>
                <p>About us</p>
                <p>Certifiyeet Media</p>
            </div>
            <div className='news'>
                <h6>Newsletter</h6>
                <span className='inputText' > <input type='text' placeholder='email address'/>
                <button><img alt='>' src={Image.arrow}/></button></span>
                <p>Hello, we are Certifyeet Media Our goal is to<br/> generate Certificate online </p>
            </div>
        </div>
        <div>
            <div className='line'></div>
            <div className='ending'>
                <p className='CompanyName'>CERTIFYEET</p>
                <span  className='terms'>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </span>
                <span className='socials'>
                    <a href='www.linkedin.com'> <img alt='linkedin' src={Image.linkedin}/></a>
                    <a href='www.linkedin.com'><img src={Image.X} alt='X'/></a>
                    <a href='www.linkedin.com'><img src={Image.instagram} alt='instragram'/></a>
                    <a href='www.linkedin.com'><img alt='facebook' src={Image.facebook}/></a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default footer