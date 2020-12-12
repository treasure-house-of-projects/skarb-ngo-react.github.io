import React, { useState, useEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Header/Header'
import MainPage from './MainPage/MainPage'
import Footer from './Footer/Footer'
import LoginPage from './LoginPage/LoginPage'
import VolunteerRegistration from './Registration/VolunteerRegistration'
import OrganizationRegistration from './Registration/OrganizationRegistration'
import PartnerRegistration from './Registration/PartnerRegistration'
import './App.scss'
import './CustomBootstrap.scss'
import lang from './language'


function App() {
  const [language, setLanguage] = useState(lang.RU);
  
  useEffect(() => {
    const current = localStorage.getItem('language');
    if (current === null) {
      setLanguage(lang.RU);
    } else if (current === 'EN') {
      setLanguage(lang.EN);
    } else if (current === 'RU') {
      setLanguage(lang.RU);
    } else if (current === 'UA') {
      setLanguage(lang.UA);
    }
  }, [])

  return (
    <Router>
      <Header language={language} onLanguageChange={setLanguage} localization={language}></Header>
        <Switch>
          <Route path="/volunteer-registration">
            <VolunteerRegistration localization={language}></VolunteerRegistration>
          </Route>
          <Route path="/organization-registration">
            <OrganizationRegistration localization={language}></OrganizationRegistration>
          </Route>
          <Route path="/partner-registration">
            <PartnerRegistration localization={language}></PartnerRegistration>
          </Route>
          <Route path="/login-page">
            <LoginPage localization={language}></LoginPage>
          </Route>
          <Route path="/">
            <MainPage localization={language}></MainPage>
          </Route>
        </Switch>
      <Footer localization={language}></Footer>
    </Router>
  )
}

export default App