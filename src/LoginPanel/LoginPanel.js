import React from 'react'
import { Link } from "react-router-dom"
import './LoginPanel.scss'

function LoginPanel() {
    return (
        <div className='header__button_container'>
                <Link to="/login-page"><button className='button header__button'>Регистрация</button></Link>
                <button className='button header__button'>Вход</button>
        </div>
    )
}

export default LoginPanel