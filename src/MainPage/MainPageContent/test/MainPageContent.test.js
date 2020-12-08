import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import lang from '../../../language'

import MainPageContent from './../MainPageContent'

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
        render(<MainPageContent localization={lang.EN}/>, container)
    })
})

it("renders statistic", async () => {
    const fakeStatistic = {
        published: "10 000",
        inProgress: "5 665",
        completed: "4 335"
    }
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeStatistic)
      })
    )
    await act(async () => {
      render(<MainPageContent id="123" localization={lang.EN}/>, container)
    })
    expect(container.querySelector(".task-overall").textContent).toBe(fakeStatistic.published)
    expect(container.querySelector(".task-in-progress").textContent).toBe(fakeStatistic.inProgress)
    expect(container.querySelector(".task-completed").textContent).toBe(fakeStatistic.completed)
    global.fetch.mockRestore()
})