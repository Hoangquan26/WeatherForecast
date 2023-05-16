import React, { useState, useEffect, useContext, useMemo } from 'react';
import { currentTimeContext, setCurrentTimeContext, setOnHomePageContext } from '../../weatherContext';

const WeatherTimeDetail = ({timeZone}) => {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octorber',
        'Noverber',
        'December'
    ]
    const day=[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const onHomePage = useContext(setOnHomePageContext)
    const currentDate = useContext(currentTimeContext)
    const setCurrentDate = useContext(setCurrentTimeContext)
    let dateString = `${day[currentDate.getDay()]}, ${currentDate.toLocaleDateString()}`
    useEffect(() => {
        let id = setInterval(() => {
            setCurrentDate(new Date())
        }, 60000)
        dateString = `${day[currentDate.getDay()]}, ${currentDate.getDate()} ${month[currentDate.getMonth()]} ${currentDate.getFullYear()}`
        return () => clearInterval(id)
    }, [])
    return (
        <div className=' flex flex-col'>
        {
            onHomePage ? 
            <div className=' flex justify-between'>
                <span>{dateString}</span>
                <span>{`${currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`}</span>
            </div>
            :
            <span>{dateString} - {`${currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`}</span>
        }
        </div>
    );
};

export default WeatherTimeDetail;