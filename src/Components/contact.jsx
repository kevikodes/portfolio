import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaSkype,
  FaTwitter,
  FaDribbble,
  FaFacebookF,
} from 'react-icons/fa'
import SectionTitle from './section_title'

export default function Contact() {
  return (
    <div className='contact-area section-ptb' id='contact'>
      <div className='container'>
        <SectionTitle
          title='CONTACT US'
          subTitle='Ways To Contact Me'
          desc="I'd love to hear from you and discuss potential collaborations or answer any questions you may have. Please feel free to reach out through any of the following channels, and I'll respond promptly to ensure smooth communication:"
        />
      </div>
      <div className='container mt-45'>
        <div className='row md-justify-content-center'>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaEnvelope />
                </i>
              </div>
              <a className='btn-animation' href='mailto: krowens3rd@gmail.com'>
                krowens3rd@gmail.com
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaPhone />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                +1 (818) 799 9373
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaSkype />
                </i>
              </div>
              <a className='btn-animation' href='#'>
                live:krowens3rd
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaTwitter />
                </i>
              </div>
              <a className='btn-animation' href='https://twitter.com/krowens3'>
                @krowens3
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaDribbble />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                Cleverprogrammer
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaFacebookF />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.facebook.com/kevin.owensiii'
              >
                Kevin Owens III
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
