import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.scss'

function LoginPage() {
    const [isDisabled, setIsDisabled] = useState(true)
    const [link, setLink] = useState('')
    return (
        <div className='login_page'>
            <title className='title login_page__title title--red'>Регистрация</title>
            <p className='login_page__info'>Вы регистрируетесь как:</p>
            <form>
            <div className='login_page__choise'>
                <input className='login_page__select' type="radio" name="size" id="size_1" value="small" onClick={() => {setIsDisabled(false); setLink('/volunteer-registration')}}/>
                <label className='login_page__select_label' htmlFor="size_1">Волонтер</label>
                <input className='login_page__select' type="radio" name="size" id="size_2" value="small" onClick={() => {setIsDisabled(false); setLink('/organization-registration')}}/>
                <label className='login_page__select_label' htmlFor="size_2">Организация</label>
                <input className='login_page__select' type="radio" name="size" id="size_3" value="small" onClick={() => {setIsDisabled(false); setLink('/partner-registration')}}/>
                <label className='login_page__select_label' htmlFor="size_3">Партнер</label>
            </div>
            <Link to={link} className='submit-link'><button type='submit' className='button button--center button--orange' disabled={isDisabled}>Далее</button></Link>
            </form>
        </div>
    )
}

export default LoginPage