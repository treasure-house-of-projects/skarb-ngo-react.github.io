import React from 'react'
import Tasks from './Task'
import './TasksContainer.scss'

function TasksContainer() {
    return (
        <div className='tasks'>
            <title className='title tasks__title title--red'>Задачи</title>
            <div className='tasks__container'>
                <Tasks></Tasks>
            </div>
            <button className='button tasks__button button--center'>Все задачи</button>
        </div>
    )
}

export default TasksContainer