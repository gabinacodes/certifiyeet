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
        <div className='greyBackground'>
             <div className='circle'>
             </div>
             <div className='why'>
                <h1>Why <span>CERTIFY</span>EET ?</h1>
                <p>Certifyeet is a complete and easy to use online certificate generator. It enables users to design certificates, import list of recipients, send bulk certificates, and generates links for easy access and distribution.</p>
                <button>Start for free</button> 
             </div>
        </div>
        <div className='howitworks'>
          <div>
            <h1>How it works</h1>
            <p>Generating digital certificate and badge has been made easy</p>

          </div>
          <div>
            <div className='choosetemplate'>
              <div >
                <h2>Choose template</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Odio ac cras ornare molestie ipsum quisque lacus risus blandit. Diam fermentum maecenas tortor </p>
              </div>
              <div>
                <img src={Image.choose} alt='image1'/>
              </div>
            </div>
            <div className='designtemplate'>
              <div>
                <img src={Image.design} alt='image1'/>
              </div>
              <div>
                <h2>Design template</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Odio ac cras ornare molestie ipsum quisque lacus risus blandit. Diam fermentum maecenas tortor </p>
              </div>
            </div>
            <div className='generatetemplate'>
              <div>
                <h2>Generate template</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Odio ac cras ornare molestie ipsum quisque lacus risus blandit. Diam fermentum maecenas tortor </p>
              </div>
              <div>
                <img src={Image.generate} alt='image1'/>
              </div>
            </div>
            <div className='downloadShare'>
              <div>
                <img src={Image.download} alt='image1'/>
              </div>
              <div>
                <h2>Download & Share</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Odio ac cras ornare molestie ipsum quisque lacus risus blandit. Diam fermentum maecenas tortor </p>
              </div>
            </div>
          </div>
        </div>
        <div className='whyReward'>
          <h1>Why  reward with certifcate ?</h1>
         <div className='sectionbox'>
         <div className='recognise'>
            <img src={Image.recognization} alt='image1'/>
            <h2>Recognize their hard work </h2>
            <p>Lorem ipsum dolor sit amet consectetur. Odio ac cras ornare molestie ipsum quisque lacus risus dio cras. Pellentesque morbi amet viverra</p>
          </div>
          <div className='boost'>
            <img  src={Image.boost} alt='image1'/>
            <h2>Boost Proffesional Growth </h2>
            <p>Lorem ipsum dolor sit amet consectetur. Odio ac cras ornare molestie ipsum quisque lacus risus dio cras. Pellentesque morbi amet viverra</p>
          </div>
          <div className='build'>
            <img src={Image.build} alt='image1'/>
            <h2>Build Organisational Trust </h2>
            <p>Lorem ipsum dolor sit amet consectetur. Odio ac cras ornare molestie ipsum quisque lacus risus dio cras. Pellentesque morbi amet viverra</p>
          </div>
         </div>
        </div>
        <div className='certificateTemplate'>
          <p>Certificate Template</p>
          <h1>Upload your own designs</h1>
          <p>Choose one of or pre-designed template to get started</p>
          <span>
            <img src={Image.certificate1} alt='certificate'/>
            <img src={Image.certificate2} alt='certificate'/>
            <img src={Image.certificate3} alt='certificate'/>
            <img src={Image.certificate4} alt='certificate'/>
            <img src={Image.certificate5} alt='certificate'/>
            <img src={Image.certificate6} alt='certificate'/>
            <img src={Image.certificate7} alt='certificate'/>
          </span>
        </div>
 
        <div className='fallen'>
          <h1>Fallen in love yet?</h1>
          <button>Sign up for free</button>
        </div>
    </div>
  )
}

export default home