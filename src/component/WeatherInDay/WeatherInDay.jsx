import React, { useEffect, useState, useContext } from 'react';
import { currentCityContext, currentTimeContext } from '../../weatherContext';
import WeatherCard from './WeatherCard';
const WeatherInDay = () => {
    const [ todayWeather, setTodayWeather] = useState([])
    const [page, setPage] = useState(0)
    const currentCity = useContext(currentCityContext)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&mode=json&appid=0ee46e68023c66dbde87c4ca16a727f7&cnt=24`
    const pageNumber = Array(24 / 4).fill(0)
    useEffect(() => {
        let ignore = false;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                setTodayWeather(data.list)
            }
        })
        .catch(error => console.error(error))
        return () => ignore = true
    }, [currentCity])
    let pastWeatherData = []
    if(todayWeather) {
        pastWeatherData = todayWeather.map(value => {
            return {
                time:  value.dt_txt,
                temp: Math.floor(value.main.temp - 273.15),
                weather: value.weather[0]
            }
        })
    }
    return (
        <div className=' m-4 mt-6 flex flex-col'>
            <h3 className=' text-left font-medium text-xl'>Weather Today</h3>
            <div className=' grid mt-4' style={{gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(1, 1fr)'}}>
            {pastWeatherData.slice(page,page + 4).map((value, index) => {
                return (
                    <WeatherCard key={index} temperature={value.temp} weather={value.weather} time={value.time}></WeatherCard>
                )
            })}
            </div>
            <div className=' flex items-center justify-center mt-2'>
            {
                pageNumber.map((value, index) => {
                        return <div onClick={() => setPage(index)} className={` cursor-pointer m-2 h-4 w-4 rounded-full ${index === page ? 'bg-blue-300' : ' bg-white'} border-2 border-silver-100`} key={index}></div>
                    }
                )
            }
            </div>
        </div>
    );
};

export default WeatherInDay;