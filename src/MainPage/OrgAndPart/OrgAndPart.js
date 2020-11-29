import React, { useState, useEffect } from 'react'
import './OrgAndPart.scss'

function OrgAndPart({localization}) {
    const [orgLogo, setOrgLogo] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        // fetch('http://back-dev.skarb.ngo/v1.0/tasks/search/recent?numberOfTasks=6')
        fetch('http://localhost:3001/orgLogo')
            .then(res => res.json())
            .then(
                (res) => { 
                    setOrgLogo(res)
                    setIsLoaded(true)
                })
    }, [])
    return (
        <div className='organizations'>
            <title className='title organizations__title title--red title--small'>{localization.label.organizationsAndPartners}</title>
            <div className='organization'>
                { isLoaded ? orgLogo.map(org => 
                    <img className='organization__img' src={org.logo} alt='organization__icon' key={org.id}></img>
                ) : <div>Loading...</div>}
            </div>
            <button className='button organizations__button button--center'>{localization.label.membersAll}</button>
        </div>
    )
}

export default OrgAndPart