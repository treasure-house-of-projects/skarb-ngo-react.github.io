import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import lang from '../../../language'

import NewsContainer from './../NewsContainer'

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
        render(<NewsContainer localization={lang.EN}/>, container)
    })
})

// it("renders statistic", async () => {
//   const fakeStatistic = {
//       taskOverall: "10 000",
//       taskInProgress: "5 665",
//       taskCompleted: "4 335"
//   }
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeStatistic)
//     })
//   )
//   await act(async () => {
//     render(<MainPageContent id="123" />, container)
//   })
//   expect(container.querySelector(".task-overall").textContent).toBe(fakeStatistic.taskOverall)
//   expect(container.querySelector(".task-in-progress").textContent).toBe(fakeStatistic.taskInProgress)
//   expect(container.querySelector(".task-completed").textContent).toBe(fakeStatistic.taskCompleted)
//   global.fetch.mockRestore()
// })