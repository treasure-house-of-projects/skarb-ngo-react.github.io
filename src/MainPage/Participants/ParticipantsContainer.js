import React from 'react'
import './Participants.scss'
import Participant from './Participant'

function Participants() {
    return (
        <div className='second_backgr'>
        <div className='participants backgr--two_tone'>
            <title className='title participants__title title--white'>Наши участники</title>
            <title className='title participants__title-second title--white title--small'>Волонтеры</title>
            <div className='participants__container'>
                <Participant></Participant>
            </div>
        </div>
        </div>
    )
}

export default Participants