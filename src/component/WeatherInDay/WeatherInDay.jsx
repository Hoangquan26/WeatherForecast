import React, { useEffect, useState, useContext } from 'react';
import { currentCityContext } from '../../weatherContext';
import WeatherCard from './WeatherCard';
const WeatherInDay = () => {
    const [ todayWeather, setTodayWeather] = useState([])
    const currentCity = useContext(currentCityContext)
    const today = new Date()
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&mode=json&appid=0ee46e68023c66dbde87c4ca16a727f7&cnt=8`
    useEffect(() => {
        let ignore = false;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                setTodayWeather(data.list.filter(value => new Date(value.dt_txt).getDate() == today.getDate()))
            }
        })
        .catch(error => console.error(error))
        return () => ignore = true
    }, [currentCity])
    let pastWeatherData = []
    if(todayWeather) {
        pastWeatherData = todayWeather.map(value => {
            const valueTime = new Date(value.dt_txt)
            return {
                time: `${valueTime.getHours()}:00`,
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
            {pastWeatherData.splice(0, 4).map((value, index) => {
                return (
                    <WeatherCard key={index} temperature={value.temp} weather={value.weather} time={value.time}></WeatherCard>
                )
            })}
            </div>
        </div>
    );
};

export default WeatherInDay;