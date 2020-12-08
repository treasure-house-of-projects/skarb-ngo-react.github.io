import React, { useState, useEffect } from 'react'
import './TasksContainer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const awesomeAngleDown = <FontAwesomeIcon className="fa-angle-down" icon={faCircle}/>

function Tasks({localization}) {
    const [tasks, setTasks] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('http://back-dev.skarb.ngo/v1.0/tasks/search/recent?numberOfTasks=6')
        // fetch('http://localhost:3001/tasks')
            .then(res => res.json())
            .then(
                (res) => { 
                    setTasks(res)
                    setIsLoaded(true)
                })
    }, [])

    
    function truncateString(str, num) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }


    if (!isLoaded) {
        return <div>Loading...</div>
    } else {    
    return tasks.map( task =>
    <div className={task.status === 'NEW' ? 'task task--blue' : 'task'} key={task.id}>
        <title className='task__title'>{truncateString(task.name, 32)}</title>
        <p className='task__type'>{task.status}</p>
        <ul>
            <li className='task__description'>{awesomeAngleDown}<strong>{localization.task.info.deadline}</strong> - {task.deadline}</li>
            <li className='task__description'>{awesomeAngleDown}<strong>{localization.task.reward}</strong> - {task.reward === null ? 'упоминание на сайте' : task.reward}</li>
            <li className='task__description'>{awesomeAngleDown}<strong>{localization.task.categories}</strong> - {task.categories.map((cat) => cat + '; ')}</li>
        </ul>
        <p className='task__button'>{localization.task.to}</p>
    </div>
    )}
}

export default Tasks