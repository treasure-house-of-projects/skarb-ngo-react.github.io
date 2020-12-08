import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import Tasks from './../Task'
import lang from '../../../language'

import Task from './../Task'

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
        render(<Task localization={lang.EN}/>, container)
    })
})

it("renders task", async () => {
  const fakeTask = [
    {
      "id": 9999,
      "type": "PARTNER_TASK",
      "status": "NEW",
      "name": "Организация благотворительного забега для сбора средств для борьбы с загрязнением окружающей среды",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "organizationId": 9998,
      "organizationName": "Coca-Cola",
      "deadline": "2020-12-12",
      "reward": null,
      "duration": "LONG_TERM",
      "categories": [
        "Sporting equipment",
        "Sporting clothes"
      ]
    },
    {
      "id": 9998,
      "type": "VOLUNTEER_TASK",
      "status": "NEW",
      "name": "Создание рекламной брошюры для распространения в школах и детсадах",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "organizationId": 9999,
      "organizationName": "GreenStreets",
      "deadline": "2020-12-12",
      "reward": null,
      "duration": "LONG_TERM",
      "categories": [
        "Graphic design",
        "Logo design"
      ]
    }
  ]
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTask)
    })
  )
  await act(async () => {
    render(<Tasks id="123" localization={lang.EN}/>, container)
  })
  expect(container.getElementsByClassName("task__description")[0].textContent).toBe(`Actual until - ${fakeTask[0].deadline}`)
  global.fetch.mockRestore()
})