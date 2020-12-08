import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import lang from '../../language'

import LoginPanel from './../LoginPanel'

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
        render(<Router><LoginPanel localization={lang.EN}/></Router>, container)
    })
})