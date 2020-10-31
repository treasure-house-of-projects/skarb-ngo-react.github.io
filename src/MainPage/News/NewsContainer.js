import React from 'react'
import New from './New'
import './News.scss'

function NewsContainer() {
    return (
        <div className='news'>
            <title className='title news__title title--red'>Новости проекта</title>
            <div className='news__container'>
                <New></New>
            </div>
            <button className='button news__button button--center'>Все новости</button>
        </div>
    )
}

export default NewsContainer