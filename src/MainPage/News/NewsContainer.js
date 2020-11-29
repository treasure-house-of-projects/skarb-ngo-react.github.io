import React from 'react'
import New from './New'
import './News.scss'

function NewsContainer({localization}) {
    return (
        <div className='news'>
            <title className='title news__title title--red'>{localization.label.news}</title>
            <div className='news__container'>
                <New localization={localization}></New>
            </div>
            <button className='button news__button button--center'>{localization.label.allNews}</button>
        </div>
    )
}

export default NewsContainer