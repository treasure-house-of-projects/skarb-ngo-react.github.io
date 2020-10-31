import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './Header.scss'
import LoginPanel from '../LoginPanel/LoginPanel'
import logo from './logo_red_300px.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faLanguage, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const awesomeAngleDown = <FontAwesomeIcon className="fa-angle-down" icon={faAngleDown}/>

function Header() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div>
        <header className='header'>
            <div className='header--normal'>
                <img src={logo} alt='logo' className='header__logo--red'></img>
                <nav className='header__navigation'>
                    <Link to="/" className='header__dropdown'>Главная</Link>
                    <div className='header__dropdown'>О проекте &#160;{awesomeAngleDown}
                        <div className="header__dropdown-content">
                            <Link to="/about" className='header__dropdown-content__link'>О проекте</Link>
                            <Link to="/news" className='header__dropdown-content__link'>Новости</Link>
                            <Link to="/rules" className='header__dropdown-content__link'>Правила</Link>
                            <Link to="/help" className='header__dropdown-content__link'>Помощь</Link>
                            <Link to="/advice" className='header__dropdown-content__link'>Советы НКО</Link>
                        </div>
                    </div>
                    <div className='header__dropdown'>Участники &#160;{awesomeAngleDown}
                        <div className="header__dropdown-content">
                            <Link to="/volunteers" className='header__dropdown-content__link'>Волонтеры</Link>
                            <Link to="/organizations" className='header__dropdown-content__link'>Организации</Link>
                            <Link to="/partners" className='header__dropdown-content__link'>Партнеры</Link>
                        </div>
                    </div>
                    <div className='header__dropdown'>Задачи &#160;{awesomeAngleDown}
                        <div className="header__dropdown-content">
                            <Link to="/tasks-for-volunteers" className='header__dropdown-content__link'>Для волонтеров</Link>
                            <Link to="/tasks-for-partners" className='header__dropdown-content__link'>Для партеров</Link>
                            <Link to="/success-stories" className='header__dropdown-content__link'>Истории успеха</Link>
                        </div>
                    </div>
                </nav>
                <div className='header__dropdown--thin'>
                    <FontAwesomeIcon className="fa fa-language" icon={faLanguage}></FontAwesomeIcon>
                    <div className="header__dropdown-content--thin">
                        <Link to="/ru" className='header__dropdown-content__link'>Рус</Link>
                        <Link to="/ua" className='header__dropdown-content__link'>Укр</Link>
                        <Link to="/en" className='header__dropdown-content__link'>Eng</Link>
                    </div>
                </div>
                <LoginPanel></LoginPanel>
            </div>

            <div className='header--thin'>
                <button className='fa-bars-button' onClick={() => setIsVisible(true)}><FontAwesomeIcon className="fa fa-bars" icon={faBars}></FontAwesomeIcon></button>
                <img src={logo} alt='logo' className='header__logo--red'></img>
                <div className='header__menu' style={isVisible ? {display: 'block'} : {display: 'none'}}>
                    <img src={logo} alt='logo' className='header__menu__logo--red'></img>
                    <FontAwesomeIcon className="fa fa-times" icon={faTimes} onClick={() => setIsVisible(false)}></FontAwesomeIcon>
                    <div className='header__menu__all_links'>
                        <p><strong>Главная</strong></p>
                        <hr></hr>
                        <p><strong>О проекте</strong></p>
                        <p>Новости</p>
                        <p>Правила</p>
                        <p>Помощь</p>
                        <p>Советы НКО</p>
                        <hr></hr>
                        <p><strong>Участники</strong></p>
                        <p>Волонтеры</p>
                        <p>Организации</p>
                        <p>Партнеры</p>
                        <hr></hr>
                        <p><strong>Задачи</strong></p>
                        <p>Для волонтеров</p>
                        <p>Для партеров</p>
                        <p>Истории успеха</p>
                        <hr></hr>
                        <LoginPanel></LoginPanel>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header