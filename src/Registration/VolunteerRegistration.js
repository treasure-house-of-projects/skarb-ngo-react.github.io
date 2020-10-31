import React from 'react'
import './Registration.scss'

function VolunteerRegistration() {
    return (
        <div className='registration'>
            <title className='title title--red'>Регистрация волонтера</title>
            <p className='login_page__info'>Вы регистрируетесь как:</p>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-control__label">Email:</label>
                    <div className="form-control__background">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Мы будем отправлять подтверждения и уведомления на почту.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputTel1" className="form-control__label">Номер телефона (не обязательно для заполнения):</label>
                    <div className="form-control__background">
                        <input type="tel" className="form-control" id="exampleInputTel1"></input>
                    </div>
                    <small id="exampleInputTel1" className="form-text text-muted">По умолчанию виден только администрации сервиса.</small>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputFname4" className="form-control__label">Имя:</label>
                        <div className="form-control__background">
                            <input type="text" class="form-control" id="inputFname4"></input>
                        </div>
                        <small id="emailHelp" className="form-text text-muted">Должны совпадать с указанными в удостоверении личности.</small>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputLname4" className="form-control__label">Фамилия:</label>
                        <div className="form-control__background">
                            <input type="text" class="form-control" id="inputLname4"></input>
                        </div>
                    </div>
                </div>
                <label for="inputLname4" className="form-control__label">Пол:</label>
                {/* <div class="form-row">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="inlineRadio1">Мужской</label>
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="inlineRadio2">Женский</label>
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="inlineRadio3">Другой</label>
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                    </div>
                </div> */}


                <div class="form-row registration-state">
                    <ul>
                        <li>
                            <label>
                                <input type="radio" name="size" />
                                <span>Мужской</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="size" />
                                <span>Женский</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="size" />
                                <span>Другой</span>
                            </label>
                        </li>
                    </ul>
                </div>





                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default VolunteerRegistration