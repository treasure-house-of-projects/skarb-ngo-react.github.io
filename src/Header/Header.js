import React, { useState, useCallback } from 'react'
import { Link } from "react-router-dom"
import './Header.scss'
import LoginPanel from '../LoginPanel/LoginPanel'
import logo from './logo_red_300px.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faLanguage, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import lang from '../language'


const awesomeAngleDown = <FontAwesomeIcon className="fa-angle-down" icon={faAngleDown}/>

function Header({language, onLanguageChange, localization}) {
    const [isVisible, setIsVisible] = useState(false)

    const changeToUA = useCallback(() => {
        onLanguageChange(lang.UA)
        localStorage.setItem('language', 'UA')
    }, [onLanguageChange])

    const changeToRU = useCallback(() => {
        onLanguageChange(lang.RU)
        localStorage.setItem('language', 'RU')
    }, [onLanguageChange])

    const changeToEN = useCallback(() => {
        onLanguageChange(lang.EN)
        localStorage.setItem('language', 'EN')
    }, [onLanguageChange])

    return (
        <div>
        <header className='header'>
            <div className='header--normal'>
                <img src={logo} alt='logo' className='header__logo--red'></img>
                <nav className='header__navigation'>
                    <Link to="/" className='header__dropdown'>{localization.label.main}</Link>
                    <div className='header__dropdown'>{localization.label.about.project} &#160;{awesomeAngleDown}
                        <div className="header__dropdown-content">
                            <Link to="/about" className='header__dropdown-content__link'>{localization.label.about.project}</Link>
                            <Link to="/news" className='header__dropdown-content__link'>{localization.label.news}</Link>
                            <Link to="/rules" className='header__dropdown-content__link'>{localization.label.rules}</Link>
                            <Link to="/help" className='header__dropdown-content__link'>{localization.label.help}</Link>
                            <Link to="/advice" className='header__dropdown-content__link'>{localization.label.tips}</Link>
                        </div>
                    </div>
                    <div className='header__dropdown'>{localization.label.members} &#160;{awesomeAngleDown}
                        <div className="header__dropdown-content">
                            <Link to="/volunteers" className='header__dropdown-content__link'>{localization.label.volunteers}</Link>
                            <Link to="/organizations" className='header__dropdown-content__link'>{localization.label.organizations}</Link>
                            <Link to="/partners" className='header__dropdown-content__link'>{localization.label.partners}</Link>
                        </div>
                    </div>
                    <div className='header__dropdown'>{localization.label.tasks} &#160;{awesomeAngleDown}
                        <div className="header__dropdown-content">
                            <Link to="/tasks-for-volunteers" className='header__dropdown-content__link'>{localization.label.search.tasks.volunteer}</Link>
                            <Link to="/tasks-for-partners" className='header__dropdown-content__link'>{localization.label.search.tasks.partner}</Link>
                            <Link to="/success-stories" className='header__dropdown-content__link'>{localization.label.successStory}</Link>
                        </div>
                    </div>
                </nav>
                <div className='header__dropdown--thin'>
                    <FontAwesomeIcon className="fa fa-language" icon={faLanguage}></FontAwesomeIcon>
                    <div className="header__dropdown-content--thin">
                        <div className='header__dropdown-content__link' onClick={changeToRU}>{localization.header.lang.ru}</div>
                        <div className='header__dropdown-content__link' onClick={changeToUA}>{localization.header.lang.ua}</div>
                        <div className='header__dropdown-content__link' onClick={changeToEN}>{localization.header.lang.eng}</div>
                    </div>
                </div>
                <LoginPanel localization={localization}></LoginPanel>
            </div>

            <div className='header--thin'>
                <button className='fa-bars-button' onClick={() => setIsVisible(true)}><FontAwesomeIcon className="fa fa-bars" icon={faBars}></FontAwesomeIcon></button>
                <img src={logo} alt='logo' className='header__logo--red'></img>
                <div className='header__menu' style={isVisible ? {display: 'block'} : {display: 'none'}}>
                    <img src={logo} alt='logo' className='header__menu__logo--red'></img>
                    <FontAwesomeIcon className="fa fa-times" icon={faTimes} onClick={() => setIsVisible(false)}></FontAwesomeIcon>
                    <div className='header__menu__all_links'>
                        <Link to="/" className='links'><strong>{localization.label.main}</strong></Link>
                        <hr></hr>
                        <Link to="/" className='links'>{localization.label.about.project}</Link>
                        <Link to="/" className='links'>{localization.label.news}</Link>
                        <Link to="/" className='links'>{localization.label.rules}</Link>
                        <Link to="/" className='links'>{localization.label.help}</Link>
                        <Link to="/" className='links'>{localization.label.tips}</Link>
                        <hr></hr>
                        <Link to="/" className='links'><strong>{localization.label.members}</strong></Link>
                        <Link to="/" className='links'>{localization.label.volunteers}</Link>
                        <Link to="/" className='links'>{localization.label.organizations}</Link>
                        <Link to="/" className='links'>{localization.label.partners}</Link>
                        <hr></hr>
                        <Link to="/" className='links'><strong>{localization.label.tasks}</strong></Link>
                        <Link to="/" className='links'>{localization.label.search.tasks.volunteer}</Link>
                        <Link to="/" className='links'>{localization.label.search.tasks.partner}</Link>
                        <Link to="/" className='links'>{localization.label.successStory}</Link>
                        <hr></hr>
                        <LoginPanel localization={localization}></LoginPanel>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header