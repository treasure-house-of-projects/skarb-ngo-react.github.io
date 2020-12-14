import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { act } from "react-dom/test-utils"
import lang from '../../language'

import RegistrationPage from '../RegistrationPage'

let container = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
});

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders without crashing', ()=>{
    act(() => {
        render(<Router><RegistrationPage localization={lang.EN}/></Router>, container)
    })
})