import React, { useState, useEffect } from 'react'
import './MainPageContent.scss'

function MainPageContent() {
    const [statistic, setStatistic] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        // fetch('http://back-dev.skarb.ngo/v1.0/tasks/search/recent?numberOfTasks=6')
        fetch('http://localhost:3001/statistic')
            .then(res => res.json())
            .then(
                (res) => {
                    setStatistic(res)
                    setIsLoaded(true)
                })
    }, [])
    return (
        <div className='content'>
            <div className='info'>
                <title className='title info_title title--red '>Длинный заголовок в 2 строчки</title>
                <div className='info_text'>Praesent pellentesque molestie metus, vitae tincidunt lectus vulputate in. Aenean sed consequat leo. Quisque convallis commodo arcu, a faucibus lorem interdum non.</div>
            </div>
            {isLoaded ? 
            <div className='statistic'>
                <title className='title statistic_title title--orange'>Статистика</title>
                <p className="statistic_tasks task-overall">{statistic.taskOverall}</p>
                <p className="statistic_tasks_desc">Задач создано</p>
                <p className="statistic_tasks task-in-progress">{statistic.taskInProgress}</p>
                <p className="statistic_tasks_desc">Задач в работе</p>
                <p className="statistic_tasks task-completed">{statistic.taskCompleted}</p>
                <p className="statistic_tasks_desc">Задач выполнено</p>
                <button className='button statistic_button button--orange'>Смотреть задачи</button>
            </div>
            : 
            <div className='statistic'>
                <title className='title statistic_title title--orange'>Статистика</title>
                <p>Loading...</p>
                <button className='button statistic_button button--orange'>Смотреть задачи</button>
            </div>
            }
        </div>
    )
}

export default MainPageContent