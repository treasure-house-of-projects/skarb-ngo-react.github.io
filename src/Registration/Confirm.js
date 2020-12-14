import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

function Confirm({localization}) {
    const [token, setToken] = useState(useParams());
    const [confirmed, setConfirmed] = useState(false);

    useEffect(() => {
        axios.post(`http://back-dev.skarb.ngo/v1.0/users/register/confirm`, {
            token: token.token
        })
        .then((response) => {
            setConfirmed(true)
        })
        .catch(error => {
            console.log(error.response.data.message)
            alert(error.response.data.message)
        })
    }, []);

    if (confirmed) {
        return (
            <div className='login_page container'>
                <title className='title login_page__title title--red'>
                    {localization.registration.confirmed}
                </title>
                <p className='login_page__info'>
                    {localization.registration.info}
                </p>
                <div className="row justify-content-center">
                    <button type="button" className="button">{localization.button.toAcc}</button>
                    <button type="button" className="button">{localization.button.toTask}</button>
                </div>
            </div>
        )
    } else {    
        return (
            <div className='login_page container'>
                <title className='title login_page__title title--red'>
                    {localization.registration.notconfirmed}
                </title>
            </div>
        )
    }
}

export default Confirm