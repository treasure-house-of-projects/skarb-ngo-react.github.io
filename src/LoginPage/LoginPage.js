import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.scss'

function LoginPage({localization}) {
    const [isDisabled, setIsDisabled] = useState(true)
    const [link, setLink] = useState('')
    return (
        <div className='login_page'>
            <title className='title login_page__title title--red'>{localization.label.registration}</title>
            <p className='login_page__info'>{localization.label.registrationAs}:</p>
            <form>
            <div className='login_page__choise'>
                <input className='login_page__select' type="radio" name="size" id="size_1" value="small" onClick={() => {setIsDisabled(false); setLink('/volunteer-registration')}}/>
                <label className='login_page__select_label' htmlFor="size_1">{localization.button.volunteer}</label>
                <input className='login_page__select' type="radio" name="size" id="size_2" value="small" onClick={() => {setIsDisabled(false); setLink('/organization-registration')}}/>
                <label className='login_page__select_label' htmlFor="size_2">{localization.button.organization}</label>
                <input className='login_page__select' type="radio" name="size" id="size_3" value="small" onClick={() => {setIsDisabled(false); setLink('/partner-registration')}}/>
                <label className='login_page__select_label' htmlFor="size_3">{localization.button.partner}</label>
            </div>
            <Link to={link} className='submit-link'><button type='submit' className='button button--center button--orange' disabled={isDisabled}>{localization.button.next}</button></Link>
            </form>
        </div>
    )
}

export default LoginPage