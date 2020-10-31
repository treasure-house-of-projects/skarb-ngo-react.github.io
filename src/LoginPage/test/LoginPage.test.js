import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { act } from "react-dom/test-utils"

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
        render(<Router><LoginPage /></Router>, container)
    })
})