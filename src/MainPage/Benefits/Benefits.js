import React from 'react'
import './Benefits.scss'
import puzzle from './Rectangle.png'
import puzzle1 from './Rectangle (1).png'
import puzzle2 from './Rectangle (2).png'

function Benefits({localization}) {
    return (
        <div className='second_backgr'>
        <div className='benefits backgr--two_tone container'>
            <title className='title benefits__title title--white'>{localization.label.benefits}</title>
            <div className='benefits__content'>
                <div className='benefits__benefit'>
                    <img src={puzzle} alt='puzzle' className='benefits__benefit_icon'></img>
                    <title className='benefits__benefit_title'>{localization.label.search.tasks.volunteer}</title>
                    <p className='benefits__benefit_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam nisl nec odio commodo vulputate. Phasellus lorem leo, rutrum at sem at, euismod tristique augue.</p>
                </div>
                <div className='benefits__benefit'>
                    <img src={puzzle1} alt='puzzle' className='benefits__benefit_icon'></img>
                    <title className='benefits__benefit_title'>{localization.label.search.tasks.organization}</title>
                    <p className='benefits__benefit_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam nisl nec odio commodo vulputate. Phasellus lorem leo, rutrum at sem at, euismod tristique augue.</p>
                </div>
                <div className='benefits__benefit'>
                    <img src={puzzle2} alt='puzzle' className='benefits__benefit_icon'></img>
                    <title className='benefits__benefit_title'>{localization.label.search.tasks.partner}</title>
                    <p className='benefits__benefit_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam nisl nec odio commodo vulputate. Phasellus lorem leo, rutrum at sem at, euismod tristique augue.</p>
                </div>
            </div>
            <button className='button benefits__button'>{localization.label.registration}</button>
        </div>
        </div>
    )
}

export default Benefits