import React, { useEffect, useState } from 'react'
import './Registration.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons'
import * as CryptoJS from 'crypto-js'

function OrganizationRegistration({localization}) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [sex, setSex] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [organizationPosition, setOrganizationPosition] = useState("");
    const [organizationLink, setOrganizationLink] = useState("");
    const [organizationAbout, setOrganizationAbout] = useState("");
    const [organizationRegLink, setOrganizationRegLink] = useState("");
    const [file, setFile] = useState([]);
    const [invalidFile, setInvalidFile] =useState(false);
    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    
    const handleSubmit = event => {
        event.preventDefault()
        setCurrentStep(currentStep + 1)
    }

    const finishSubmit = event => {
        event.preventDefault()
        function isTooBig(value) {
            return value.size >= 3000000
        }
        let tooBigFiles = file.filter(isTooBig)
        if (file.length > 3) {
        } else if (tooBigFiles.length > 0) {
        } else {
            setCurrentStep(currentStep + 1)
        }
    }

    function backwards() {
        setCurrentStep(currentStep - 1)
    }

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

    // function encrypt(message = '', key = 'KeyForPassword77'){
    //     var message = CryptoJS.AES.encrypt(message, key);
    //     console.log(message.toString())
    // }
    
    // function decrypt(message = '', key = ''){
    //     var code = CryptoJS.AES.decrypt(message, key);
    //     var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
    
    //     return decryptedMessage;
    // }
    // console.log(encrypt('Hello World'));
    // console.log(decrypt('U2FsdGVkX1/0oPpnJ5S5XTELUonupdtYCdO91v+/SMs='))

    return (
        <div className='registration container'>
            <div className="row justify-content-md-center registration-stage" style={currentStep === 4 ? {display: 'none'} : {}}>
                <div className="col-md-auto registration-stage--inline">
                    <div className="circle" 
                        style={
                            currentStep === 1 ?
                            {backgroundColor: "#635A8E",
                            color: "#FFFFFF"} :
                            {backgroundColor: "#D9D2F8",
                            color: "#444156"}
                        }    
                    >
                        1
                    </div>
                    <p className="stage-descript" 
                        style={
                            currentStep === 1 ?
                            {textDecoration: "underline",
                            color: "#444156",
                            fontWeight: "bold"} :
                            {textDecoration: "none",
                            color: "#444156"}
                        }  
                    >
                        Создание личного кабинета
                    </p>
                </div>
                <div class="col-md-auto registration-stage--inline">
                    <div className="circle" 
                        style={
                            currentStep === 2 ?
                            {backgroundColor: "#635A8E",
                            color: "#FFFFFF"} :
                            {backgroundColor: "#D9D2F8",
                            color: "#444156"}
                        }  
                    >
                        2
                    </div>
                    <p className="stage-descript" 
                        style={
                            currentStep === 2 ?
                            {textDecoration: "underline",
                            color: "#444156",
                            fontWeight: "bold"} :
                            {textDecoration: "none",
                            color: "#444156"}
                        }  
                    >
                        Ввод данных об организации
                    </p>
                </div>
                <div class="col-md-auto registration-stage--inline">
                    <div className="circle" 
                        style={
                            currentStep === 3 ?
                            {backgroundColor: "#635A8E",
                            color: "#FFFFFF"} :
                            {backgroundColor: "#D9D2F8",
                            color: "#444156"}
                        }   
                    >
                        3
                    </div>
                    <p className="stage-descript" 
                        style={
                            currentStep === 3 ?
                            {textDecoration: "underline",
                            color: "#444156",
                            fontWeight: "bold"} :
                            {textDecoration: "none",
                            color: "#444156"}
                        }  
                    >
                        Загрузка документов
                    </p>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <title className='title title--red col-10'>
                    {currentStep === 4 ? localization.registration.success : localization.organization.registration.panel.header.main}
                </title>
            </div>
            <div className="row justify-content-md-center">
                <p className='login_page__info col-10'>
                    {currentStep === 1 || currentStep === 2 ? localization.registration.panel.header.sec : 
                    currentStep ===3 ? localization.organization.registration.panel.header.link : localization.registration.successTwo}
                </p>
            </div>
            <p className='login_page__info'></p>
            <StepOne 
                currentStep={currentStep} 
                setCurrentStep={setCurrentStep}
                localization={localization}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                fname={fname}
                setFname={setFname}
                lname={lname}
                setLname={setLname}
                sex={sex}
                setSex={setSex}
                password={password}
                setPassword={setPassword}
                passwordConfirm={passwordConfirm}
                setPasswordConfirm={setPasswordConfirm}

                validation={validation}
                handleSubmit={handleSubmit}
                isVisibleOne={isVisibleOne}
                setIsVisibleOne={setIsVisibleOne}
                isVisibleTwo={isVisibleTwo}
                setIsVisibleTwo={setIsVisibleTwo}
            ></StepOne>

            <StepTwo
                currentStep={currentStep} 
                setCurrentStep={setCurrentStep}
                localization={localization}
                organizationName={organizationName}
                setOrganizationName={setOrganizationName}
                organizationPosition={organizationPosition}
                setOrganizationPosition={setOrganizationPosition}
                organizationLink={organizationLink}
                setOrganizationLink={setOrganizationLink}
                organizationAbout={organizationAbout}
                setOrganizationAbout={setOrganizationAbout}

                backwards={backwards}
                validation={validation}
                handleSubmit={handleSubmit}
            ></StepTwo>

            <StepThree
                currentStep={currentStep} 
                setCurrentStep={setCurrentStep}
                localization={localization}
                organizationRegLink={organizationRegLink}
                setOrganizationRegLink={setOrganizationRegLink}
                file={file}
                setFile={setFile}
                invalidFile={invalidFile}
                setInvalidFile={setInvalidFile}

                backwards={backwards}
                validation={validation}
                handleSubmit={handleSubmit}
                finishSubmit={finishSubmit}
                isVisibleOne={isVisibleOne}
                setIsVisibleOne={setIsVisibleOne}
                isVisibleTwo={isVisibleTwo}
                setIsVisibleTwo={setIsVisibleTwo}
            ></StepThree>
        </div>
    )
}

function StepOne({
        currentStep,
        localization, 
        email, 
        setEmail,
        phone, 
        setPhone,
        fname, 
        setFname,
        lname, 
        setLname,
        sex, 
        setSex,
        password, 
        setPassword,
        passwordConfirm,
        setPasswordConfirm,

        validation,
        handleSubmit,
        isVisibleOne,
        setIsVisibleOne,
        isVisibleTwo,
        setIsVisibleTwo
    }) {

    if (currentStep !== 1) {
        return null
      } 
    return(
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
                            { email === '' ? localization.validationMessages.NotEmpty : localization.email.error }
                        </div>
                        <small id="emailHelp" className="form-text text-muted">{localization.email.info}</small>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="form-group col-md-8">
                        <label htmlFor="exampleInputTel1" className="form-control__label">{localization.phonenumber.name}:</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            id="exampleInputTel1" 
                            minLength="12"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        ></input>
                        <div className="invalid-feedback">
                            {localization.phonenumber.error}
                        </div>
                        <small id="exampleInputTel1" className="form-text text-muted">{localization.phonenumber.info}</small>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputFname4" className="form-control__label">{localization.first.name}:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputFname4" 
                            pattern="[a-zA-Z\u0400-\u04ff]{1,30}" 
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            required
                        ></input>
                        <div className="invalid-feedback">
                            { fname === '' ? localization.validationMessages.NotEmpty : `${localization.first.name} ${localization.last.error}` }
                        </div>
                        <small id="emailHelp" className="form-text text-muted">{localization.last.info}</small>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputLname4" className="form-control__label">{localization.last.name}:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputLname4" 
                            pattern="[a-zA-Z\u0400-\u04ff]{1,30}" 
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            required
                        ></input>
                        <div className="invalid-feedback">
                        { lname === '' ? localization.validationMessages.NotEmpty : `${localization.last.name} ${localization.last.error}` }
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <label htmlFor="inputLname4" className="form-control__label col-md-8">{localization.sex.name}:</label>
                </div>
                <div className="row justify-content-center">
                    <div className="form-row col-md-8">       
                        <div className="form-group registration-state">
                            <label>
                                <input 
                                    type="radio" 
                                    name="size" 
                                    onChange={() => setSex("male")}
                                    checked={sex === "male" ? true : false}
                                    required
                                />
                                <span>{localization.sex.mname}</span>
                                <div className="invalid-feedback">
                                    {localization.sex.error}.
                                </div>
                            </label>
                        </div>
                        <div className="form-group registration-state">
                            <label>
                                <input 
                                    type="radio" 
                                    name="size" 
                                    onChange={() => setSex("female")}
                                    checked={sex === "female" ? true : false}
                                    required
                                />
                                <span>{localization.sex.fname}</span>
                            </label>
                        </div>
                        <div className="form-group registration-state">
                            <label>
                                <input 
                                    type="radio" 
                                    name="size" 
                                    onChange={() => setSex("other")}
                                    checked={sex === "other" ? true : false}
                                    required
                                />
                                <span>{localization.sex.oname}</span>
                            </label>
                        </div>
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
                    <div className="form-group col-md-8">
                        <label htmlFor="password2" className="form-control__label">{localization.password.confirm}</label>
                        <div className="input-group">
                            <input
                                type={isVisibleTwo ? 'text' : 'password'} 
                                className={"form-control"}
                                id="password2" 
                                data-toggle="password"
                                value={passwordConfirm}
                                minLength={passwordConfirm === password ? '0' : '99'}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                required
                            ></input> 
                            <div className="input-group-append">
                                <span className="input-group-text" onClick={() => setIsVisibleTwo(!isVisibleTwo)}><FontAwesomeIcon className="fa-eye" icon={isVisibleTwo ? faEyeSlash : faEye} /></span>
                            </div>
                            <div className="invalid-feedback">
                                { passwordConfirm === password ? "" : localization.validationMessages.PasswordsMatch }
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button type="submit" className="button button--orange">{localization.button.continue}</button>
                </div>                
        </form>
    )
}

function StepTwo({
    currentStep,
    localization, 
    organizationName,
    setOrganizationName,
    organizationPosition,
    setOrganizationPosition,
    organizationLink,
    setOrganizationLink,
    organizationAbout,
    setOrganizationAbout,

    backwards,
    validation,
    handleSubmit,
}) {

    if (currentStep !== 2) {
        return null
    } 
    return(
        <form className="container needs-validation" noValidate onClick={() => validation()} onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <label htmlFor="exampleInputEmail1" className="form-control__label">{localization.organization.name}:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputOrgName" 
                        aria-describedby="OrgName"
                        pattern="[a-zA-Z\u0400-\u04ff\s]{1,50}" 
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        required
                    ></input>
                    <div className="invalid-feedback">
                    {organizationName === '' ? localization.validationMessages.NotEmpty : `${localization.organization.name} ${localization.last.error}` } 
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Должно совпадать с названием организации в регистрации</small>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <label htmlFor="exampleInputEmail1" className="form-control__label">{localization.organization.position}:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputOrgPosition" 
                        aria-describedby="OrgPosition"
                        pattern="[a-zA-Z\u0400-\u04ff\s]{1,50}" 
                        value={organizationPosition}
                        onChange={(e) => setOrganizationPosition(e.target.value)}
                        required
                    ></input>
                    <div className="invalid-feedback">
                    {organizationPosition === '' ? localization.validationMessages.NotEmpty : `${localization.organization.name} ${localization.last.error}` }
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Будет отображаться в профиле организации и задачах</small>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <label htmlFor="exampleInputEmail1" className="form-control__label">{localization.organization.site.url}:</label>
                    <input 
                        type="url"  
                        className="form-control" 
                        id="exampleInputOrgLink" 
                        aria-describedby="OrgLink"
                        pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                        size="50"
                        value={organizationLink}
                        onChange={(e) => setOrganizationLink(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                        {localization.validationMessages.SiteUrl}
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Будет отображаться в профиле организации на сайте</small>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <label htmlFor="validationTextarea" className="form-control__label">{localization.about.organization}:</label>
                    <textarea 
                        class="form-control" 
                        id="validationTextareaOrgAbout" 
                        maxLength={600} 
                        value={organizationAbout}
                        onChange={(e) => setOrganizationAbout(e.target.value)}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Расскажите, чем занимается организация</small>
                </div>
            </div>         
            <div className="row justify-content-center">
                <button type="button" className="button" onClick={() => backwards()}>{localization.button.back}</button>
                <button type="submit" className="button button--orange">{localization.button.continue}</button>
            </div>
        </form>                
    )
}

function StepThree({
    currentStep,
    localization, 
    organizationRegLink,
    setOrganizationRegLink,
    file,
    setFile,
    invalidFile,
    setInvalidFile,

    backwards,
    validation,
    handleSubmit,
    finishSubmit,
}) {

    function handleRemove(id) {
        let newArr = file.splice(0)
        newArr.splice(id, 1)
        setFile(newArr)
        console.log(newArr)
    }

    useEffect(() => {
        if (file === []) {
            setInvalidFile(false) 
        }else if (file.length > 3) {
            setInvalidFile(true)
        } else {
            setInvalidFile(false) 
        }
    });

    if (currentStep !== 3) {
        return null
    } 
    return(
        <form className="container needs-validation" noValidate onClick={() => validation()} onSubmit={finishSubmit}> 
            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <label htmlFor="exampleInputEmail1" className="form-control__label">{localization.organization.reg.link}:</label>
                    <input 
                        type="url"  
                        className="form-control" 
                        id="exampleInputOrgLink" 
                        aria-describedby="OrgLink"
                        pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                        size="50"
                        value={organizationRegLink}
                        onChange={(e) => setOrganizationRegLink(e.target.value)}
                    ></input>
                    <div className="invalid-feedback">
                        {localization.validationMessages.SiteUrl} 
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Должно совпадать с названием организации в регистрации</small>
                </div>
            </div>
            <p className='login_page__info'>{localization.organization.registration.panel.header.docs}</p> 
            <div className="row justify-content-center">
                <div className="form-group col-md-auto">
                    <div class="custom-file">
                        <input 
                            type="file" 
                            className={invalidFile === true ? "is-invalid" : ""}
                            style={{display:"none"}}
                            id="files"
                            onChange={(e) => setFile(Object.values(e.target.files))}
                            multiple
                        />
                        <label className="input-file-button button" for="files">{localization.button.attach.file}</label>
                        <div className="invalid-feedback">
                            <div className="row justify-content-center">
                                {localization.validationMessages.Size.documents}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-md-auto">
                    <small className="form-text text-muted" style={{marginBottom: 20 + "px"}}>{localization.validationMessages.ContentType}; {localization.validationMessages.Size.documents}.</small>
                </div>
            </div>
            <div className="row justify-content-center" style={file[0] === undefined ? {display:"none"} : {}}>
                <div className="form-group col-md-8">
                    <div className="input-group">
                        <input
                            className={
                                file[0] === undefined ? "" :
                                file[0].size > 3000000 ? "form-control is-invalid" : "form-control"
                            }
                            id="password2" 
                            value={file[0] === undefined ? "" : file[0].name}
                            disabled
                        ></input> 
                        <div className="input-group-append">
                            <span className="input-group-text" onClick={() => handleRemove(0)}><FontAwesomeIcon className="fa-eye" icon={faTimes} /></span>
                        </div> 
                        <div className="invalid-feedback">
                            Файл превышает допустимый размер
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row justify-content-center" style={file[1] === undefined ? {display:"none"} : {}}>
                <div className="form-group col-md-8">
                    <div className="input-group">
                        <input
                            className={
                                file[1] === undefined ? "" :
                                file[1].size > 3000000 ? "form-control is-invalid" : "form-control"
                            }
                            id="password2" 
                            value={file[1] === undefined ? "" : file[1].name}
                            disabled
                        ></input> 
                        <div className="input-group-append">
                            <span className="input-group-text" onClick={() => handleRemove(1)}><FontAwesomeIcon className="fa-eye" icon={faTimes} /></span>
                        </div>
                        <div className="invalid-feedback">
                            Файл превышает допустимый размер
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row justify-content-center" style={file[2] === undefined ? {display:"none"} : {}}>
                <div className="form-group col-md-8">
                    <div className="input-group">
                        <input
                            className={
                                file[2] === undefined ? "" :
                                file[2].size > 3000000 ? "form-control is-invalid" : "form-control"
                            }
                            id="password2" 
                            value={file[2] === undefined ? "" : file[2].name}
                            disabled
                        ></input> 
                        <div className="input-group-append">
                            <span className="input-group-text" onClick={() => handleRemove(2)}><FontAwesomeIcon className="fa-eye" icon={faTimes} /></span>
                        </div>
                        <div className="invalid-feedback">
                            Файл превышает допустимый размер
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row justify-content-center">
                <button type="button" className="button" onClick={() => backwards()}>{localization.button.back}</button>
                <button type="submit" className="button button--orange">{localization.button.continue}</button>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-md-auto col-md-6">
                    <small className="form-text text-muted" style={{marginBottom: 20 + "px"}}>Регистрационные данные необходимы для подтверждения организации и возможности участия в партнерских задачах.</small>
                    <small className="form-text text-muted" style={{marginBottom: 20 + "px"}}>Вы можете пропустить этот шаг сейчас и вернуться к нему позднее в личном кабинете.</small>
                </div>
            </div>
        </form>                
    )
}

export default OrganizationRegistration