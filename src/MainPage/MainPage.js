import React from 'react'
import MainPageContent from './MainPageContent/MainPageContent'
import Benefits from './Benefits/Benefits'
import TasksContainer from './Tasks/TasksContainer'
import News from './News/NewsContainer'
import Participants from './Participants/ParticipantsContainer'
import OrgAndPart from './OrgAndPart/OrgAndPart'

function MainPage({localization}) {
  return (
      <div>
        <MainPageContent localization={localization}></MainPageContent>
        <Benefits localization={localization}></Benefits>
        <TasksContainer localization={localization}></TasksContainer>
        <News localization={localization}></News>
        <Participants localization={localization}></Participants>
        <OrgAndPart localization={localization}></OrgAndPart>
      </div>
  )
}

export default MainPage