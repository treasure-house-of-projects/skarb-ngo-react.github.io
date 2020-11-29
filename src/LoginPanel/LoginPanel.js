import React from 'react'
import { Link } from "react-router-dom"
import './LoginPanel.scss'

function LoginPanel({localization}) {
    return (
        <div className='header__button_container'>
                <Link to="/login-page"><button className='button header__button'>{localization.label.registration}</button></Link>
                <button className='button header__button'>{localization.button.login}</button>
        </div>
    )
}

export default LoginPanel