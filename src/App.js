import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Header/Header'
import MainPage from './MainPage/MainPage'
import Footer from './Footer/Footer'
import LoginPage from './LoginPage/LoginPage'
import VolunteerRegistration from './Registration/VolunteerRegistration'
import './App.scss'
import './CustomBootstrap.scss'


function App() {
  return (
    <Router>
      <Header></Header>
        <Switch>
          <Route path="/volunteer-registration">
            <VolunteerRegistration></VolunteerRegistration>
          </Route>
          <Route path="/login-page">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/">
            <MainPage></MainPage>
          </Route>
        </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App