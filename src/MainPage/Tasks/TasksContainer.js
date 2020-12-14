import React from 'react'
import Tasks from './Task'
import './TasksContainer.scss'

function TasksContainer({localization}) {
    return (
        <div className='tasks container'>
            <title className='title tasks__title title--red'>{localization.label.tasks}</title>
            <div className='tasks__container'>
                <Tasks localization={localization}></Tasks>
            </div>
            <button className='button tasks__button button--center'>{localization.label.tasksAll}</button>
        </div>
    )
}

export default TasksContainer