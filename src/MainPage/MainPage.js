import React from 'react'
import MainPageContent from './MainPageContent/MainPageContent'
import Benefits from './Benefits/Benefits'
import TasksContainer from './Tasks/TasksContainer'
import News from './News/NewsContainer'
import Participants from './Participants/ParticipantsContainer'
import OrgAndPart from './OrgAndPart/OrgAndPart'

function MainPage() {
  return (
      <div>
        <MainPageContent></MainPageContent>
        <Benefits></Benefits>
        <TasksContainer></TasksContainer>
        <News></News>
        <Participants></Participants>
        <OrgAndPart></OrgAndPart>
      </div>
  )
}

export default MainPage