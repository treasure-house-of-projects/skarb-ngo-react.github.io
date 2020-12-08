import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { act } from "react-dom/test-utils"
import lang from './../../language'

import LoginPage from './../LoginPage'

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
        render(<Router><LoginPage localization={lang.EN}/></Router>, container)
    })
})