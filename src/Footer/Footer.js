import React from 'react'
import './Footer.scss'
import logo from '../Logo.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt='logo'></img>
            <div className='footer__info'>
                <p>Связаться с нами</p>
                <p><strong>©2020 Skarb NGO</strong></p>
            </div>
        </div>
    )
}

export default Footer