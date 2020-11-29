import React, { useState, useEffect } from 'react'
// import './TasksContainer.scss'

function Participant({localization}) {
    const [users, setUsers] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // fetch('http://back-dev.skarb.ngo/v1.0/tasks/search/recent?numberOfTasks=6')
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(
                (res) => { 
                    setUsers(res)
                    setIsLoaded(true)
                })
    }, [])

    if (!isLoaded) {
        return <div>Loading...</div>;
      } else {    
        return users.map( user =>
        <div className='participant' key={user.id}>
            <img className='participant__img' src={user.avatar} alt='participant__icon'></img>
            <div className='participant__name'>{user.name}</div>
            <div className='participant__job'>{user.categories.map((cat) => cat + ', ')}</div>
        </div>
    )}
}

export default Participant