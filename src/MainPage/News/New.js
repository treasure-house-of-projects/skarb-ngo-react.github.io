import React, { useState, useEffect } from 'react'

function New() {
    const [news, setNews] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // fetch('http://back-dev.skarb.ngo/v1.0/tasks/search/recent?numberOfTasks=6')
        fetch('http://localhost:3001/news')
            .then(res => res.json())
            .then(
                (res) => { 
                    setNews(res)
                    setIsLoaded(true)
                })
    }, [])

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {    
    return news.map( news => 
        <div className='new' key={news.id}>
            <img className='new__img' src={news.img} alt='new__icon'></img>
            <title className='new__title'>{news.title}</title>
            <div className='new__date'>{news.deadline}</div>
            <p className='new__description'>{news.description}</p>
        </div>
    )}
}

export default New