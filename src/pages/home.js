import React from 'react'
import '../styles/home.css'
import Image from '../pics/image'
function home() {
  return (
    
    <div>
        <div className='CertificateGenerator'>
            <div  className='Instant'>
                <h1>Instant Certificate Generator for free</h1>
                <p>Design branded certificates using the web-based Certificate Editor</p>
                <button>See how it works</button>
            </div>
            <div className='laptop'>
               <img alt='laptop' src={Image.certificateWithLaptop}/>
            </div>
        </div>
    </div>
  )
}

export default home