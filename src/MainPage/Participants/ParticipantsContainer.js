import React from 'react'
import './Participants.scss'
import Participant from './Participant'

function Participants({localization}) {
    return (
        <div className='second_backgr'>
        <div className='participants backgr--two_tone'>
            <title className='title participants__title title--white'>{localization.label.members}</title>
            <title className='title participants__title-second title--white title--small'>{localization.label.volunteers}</title>
            <div className='participants__container'>
                <Participant localization={localization}></Participant>
            </div>
        </div>
        </div>
    )
}

export default Participants