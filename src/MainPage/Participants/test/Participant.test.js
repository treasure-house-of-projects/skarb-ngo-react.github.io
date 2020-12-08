import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import lang from '../../../language'

import Participant from './../Participant'

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
        render(<Participant localization={lang.EN}/>, container)
    })
})

it("renders user", async () => {
  const fakeUser = [
    {
      id: 2,
      name: "Максим Максимов",
      categories: [
        "дизайн",
        "верстка сайтов"
      ]
    },
    {
      id: 29,
      name: "Максим Максимов",
      categories: [
        "дизайн",
        "верстка сайтов"
      ]
    }
  ]
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  )
  await act(async () => {
    render(<Participant id="123" localization={lang.EN}/>, container)
  })
  expect(container.querySelector(".participant__name").textContent).toBe(fakeUser[0].name)
  expect(container.querySelector(".participant__job").textContent).toBe("дизайн, верстка сайтов, ")
  global.fetch.mockRestore()
})