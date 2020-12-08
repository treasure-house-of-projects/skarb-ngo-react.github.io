import React, { useEffect, useState } from 'react'
import './Registration.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'
import * as CryptoJS from 'crypto-js'
import axios from 'axios'

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
    const [categorie, setCategorie] = useState([]);
    const [selectedCategorie, setSelectedCategorie] = useState([]);
    const [reactSelectedCategories, setReactSelectedCategories] = useState([]);
    const [organizationAbout, setOrganizationAbout] = useState("");
    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        fetch('http://back-dev.skarb.ngo/v1.0/categories/partner')
            .then(res => res.json())
            .then(
                (res) => { 
                    let loadedCategories = []
                    res.map(cat => loadedCategories.push({value: cat.id, label: cat.name}))
                    setCategorie(loadedCategories)
                    console.log(categorie)
                    console.log(loadedCategories)
                })
    }, []);
    
    const handleSubmit = event => {
        event.preventDefault()
        setCurrentStep(currentStep + 1)
    }

    function encrypt(word){
        var key = CryptoJS.enc.Utf8.parse("KeyForPassword77");
        var srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        return encrypted.toString();
    }

    function decrypt(word){
        var key = CryptoJS.enc.Utf8.parse("KeyForPassword77");
        var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }

    const finishSubmit = event => {
        event.preventDefault()
        axios.post(`http://back-dev.skarb.ngo/v1.0/users/register/partners`, {
            aboutOrganization: organizationAbout,
            categoryIds: selectedCategorie,
            confirmPassword: encrypt(passwordConfirm),
            email: email,
            firstName: fname,
            lastName: lname,
            locale: "EN",
            organizationName: organizationName,
            organizationSiteUrl: organizationLink,
            password: encrypt(password),
            phone: phone === "" ? null : phone,
            positionInOrganization: organizationPosition,
            sex: sex
        })
        .then((response) => {
            setCurrentStep(currentStep + 1)
        })
        .catch(error => {
            let errorMessageArr = error.response.data.fieldErrors.map((error) => error.codes[error.codes.length-1])
            errorMessageArr.map(error => alert(eval(`localization.validationMessages.${error}`)))
        })
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
    return (
        <div className='registration container'>
            <div className="row justify-content-md-center registration-stage" style={currentStep === 3 ? {display: 'none'} : {}}>
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
                        {localization.label.accCreation}
                    </p>
                </div>
                <div className="col-md-auto registration-stage--inline">
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
                        {localization.label.organizationData}
                    </p>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <title className='title title--red col-10'>
                    {currentStep === 3 ? localization.registration.success : localization.partner.registration.panel.header.main}
                </title>
            </div>
            <div className="row justify-content-md-center">
                <p className='login_page__info col-10'>
                    {currentStep === 1 || currentStep === 2 ? localization.registration.panel.header.sec : localization.registration.successTwo}
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
                categorie={categorie}
                setCategorie={setCategorie}
                selectedCategorie={selectedCategorie}
                setSelectedCategorie={setSelectedCategorie}
                reactSelectedCategories={reactSelectedCategories}
                setReactSelectedCategories={setReactSelectedCategories}
                organizationAbout={organizationAbout}
                setOrganizationAbout={setOrganizationAbout}

                backwards={backwards}
                validation={validation}
                handleSubmit={handleSubmit}
                finishSubmit={finishSubmit}
            ></StepTwo>
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
                                    onChange={() => setSex("MALE")}
                                    checked={sex === "MALE" ? true : false}
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
                                    onChange={() => setSex("FEMALE")}
                                    checked={sex === "FEMALE" ? true : false}
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
    categorie,
    setCategorie,
    selectedCategorie,
    setSelectedCategorie,
    reactSelectedCategories,
    setReactSelectedCategories,
    organizationAbout,
    setOrganizationAbout,

    backwards,
    validation,
    handleSubmit,
    finishSubmit,
}) {

    if (currentStep !== 2) {
        return null
    } 
    return(
        <form className="container needs-validation" noValidate onClick={() => validation()} onSubmit={finishSubmit}>
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
                    <small id="emailHelp" className="form-text text-muted">{localization.validationMessages.OrganizationNameValid}</small>
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
                    <small id="emailHelp" className="form-text text-muted">{localization.validationMessages.OrganizationPositionValid}</small>
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
                    <small id="emailHelp" className="form-text text-muted">{localization.validationMessages.OrganizationLinkValid}</small>
                </div>
            </div>

            <div className="row justify-content-center">
                    <label htmlFor="exampleInputEmail1" className="form-control__label col-md-8">{localization.organization.categories}:</label>
            </div>
            <div className="row justify-content-center">
                <div className="form-row col-md-8">
                    <Select
                        isMulti
                        defaultValue={reactSelectedCategories}
                        name="sectedCategories"
                        options={selectedCategorie.length < 8 || selectedCategorie === null ? categorie :
                            [
                                {
                                    label: 'Reached max items',
                                    value: undefined,
                                    isDisabled: true,
                                },
                            ]}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        closeMenuOnSelect={false}
                        maxMenuHeight="400px"
                        onChange={(v) => {
                            if (v === null) {
                                setSelectedCategorie([])
                                setReactSelectedCategories([])
                            } else {
                                setReactSelectedCategories(v)
                                let idCat = []
                                v.map(cat => idCat.push(cat.value))
                                console.log(v)
                                setSelectedCategorie(idCat)
                            }
                        }}
                    ></Select>
                    <input
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ opacity: 0, height: 0 }}
                        value={selectedCategorie}
                        required
                    />
                    <div className="invalid-feedback" style={{marginTop: "-15px"}}>
                        {localization.validationMessages.SiteUrl}
                    </div>
                </div>  
            </div>

            <div className="row justify-content-center">
                <div className="form-group col-md-8">
                    <label htmlFor="validationTextarea" className="form-control__label">{localization.about.organization}:</label>
                    <textarea 
                        className="form-control" 
                        id="validationTextareaOrgAbout" 
                        maxLength={600} 
                        value={organizationAbout}
                        onChange={(e) => setOrganizationAbout(e.target.value)}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">{localization.validationMessages.OrganizationAboutValid}</small>
                </div>
            </div>         
            <div className="row justify-content-center">
                <button type="button" className="button" onClick={() => backwards()}>{localization.button.back}</button>
                <button type="submit" className="button button--orange">{localization.button.continue}</button>
            </div>
        </form>                
    )
}

export default OrganizationRegistration