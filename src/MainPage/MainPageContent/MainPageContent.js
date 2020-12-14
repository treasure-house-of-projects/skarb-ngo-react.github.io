import React, { useState, useEffect } from 'react'
import './MainPageContent.scss'

function MainPageContent({localization}) {
    const [statistic, setStatistic] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch('http://back-dev.skarb.ngo/v1.0/tasks/statistic')
        // fetch('http://localhost:3001/statistic')
            .then(res => res.json())
            .then(
                (res) => {
                    setStatistic(res)
                    setIsLoaded(true)
                })
    }, [])
    return (
        <div className='content container'>
            <div className='info'>
                <title className='title info_title title--red '>Длинный заголовок в 2 строчки</title>
                <div className='info_text'>Praesent pellentesque molestie metus, vitae tincidunt lectus vulputate in. Aenean sed consequat leo. Quisque convallis commodo arcu, a faucibus lorem interdum non.</div>
            </div>
            {isLoaded ? 
            <div className='statistic'>
                <title className='title statistic_title title--orange'>{localization.label.statistic}</title>
                <p className="statistic_tasks task-overall">{statistic.published}</p>
                <p className="statistic_tasks_desc">{localization.label.published.tasks}</p>
                <p className="statistic_tasks task-in-progress">{statistic.inProgress}</p>
                <p className="statistic_tasks_desc">{localization.label.inprogress.tasks}</p>
                <p className="statistic_tasks task-completed">{statistic.completed}</p>
                <p className="statistic_tasks_desc">{localization.label.completed.tasks}</p>
                <button className='button statistic_button button--orange'>{localization.label.tasksAll}</button>
            </div>
            : 
            <div className='statistic'>
                <title className='title statistic_title title--orange'>{localization.label.statistic}</title>
                <p>Loading...</p>
                <button className='button statistic_button button--orange'>{localization.label.tasks}</button>
            </div>
            }
        </div>
    )
}

export default MainPageContent