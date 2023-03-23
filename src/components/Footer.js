import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Ngọc Quý <small>&</small> Ngọc Hảo
                </span>
              </a>
            </h2>
            <p className='copyright'>January 14, 2024 – Hóc Môn, Hồ Chí Minh</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
