import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import lang from './../../language'

import Header from './../Header'

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
        render(<Router><Header localization={lang.EN}/></Router>, container)
    })
})