import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import lang from '../../../language'

import OrgAndPart from './../OrgAndPart'

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
        render(<OrgAndPart localization={lang.EN}/>, container)
    })
})