import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './LoginPage.scss'
// import '../Registration/Registration.scss'

function LoginPage({localization}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisibleOne, setIsVisibleOne] = useState(false);

    // let history = useHistory();

    function validation() {
        let forms = document.getElementsByClassName('needs-validation')
        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            })
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        // history.push("/");
    }

    return (
        <div className='login_page container'>
            <title className='title login_page__title title--red'>{localization.label.loginTitle}</title>
            <form className="container needs-validation" noValidate onClick={() => validation()} onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="form-group col-md-8">
                        <label htmlFor="exampleInputEmail1" className="form-control__label">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                        <div className="invalid-feedback">
                            {email === '' ? localization.validationMessages.NotEmpty : localization.email.error}
                        </div>
                        <small id="emailHelp" className="form-text text-muted">{localization.email.login}</small>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="form-group col-md-8">
                        <label htmlFor="password1" className="form-control__label">{localization.label.password}:</label>
                        <div className="input-group">
                            <input 
                                type={isVisibleOne ? 'text' : 'password'} 
                                className="form-control" 
                                id="password1" 
                                data-toggle="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
                                required
                            ></input>
                            <div className="input-group-append">
                                <div className="input-group-text" onClick={() => setIsVisibleOne(!isVisibleOne)}><FontAwesomeIcon className="fa-eye" icon={isVisibleOne ? faEyeSlash : faEye} /></div>
                            </div>
                            <div className="invalid-feedback">
                                { password === '' ? localization.validationMessages.NotEmpty : localization.validationMessages.Password }
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button type="submit" className="button button--orange">{localization.title.page.login}</button>
                </div>  
                <p className='login__button '>{localization.label.forgotPassword}</p>
                <p className='login__button'>{localization.link.register}</p>
            </form>  
        </div>
    )
}

export default LoginPage