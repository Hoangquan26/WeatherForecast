import React, { useContext } from 'react';
import WeatherDetail from './WeatherDetail';
import WeatherTimeDetail from './WeatherTimeDetail';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import { onHomePageContext, setOnHomePageContext } from '../../weatherContext';
import DetailHeader from '../DetailPage/DetailHeader';
const Content = ({weather, main, cityName, timeZone}) => {
    const setOnHomePage = useContext(onHomePageContext)
    const onHomePage = useContext(setOnHomePageContext)
    let currentWeather = {}
    let temp = 0
    const handleClick = () => {
        setOnHomePage(false)
    }
    if(weather){
    currentWeather = weather[0]
    temp = Math.floor((main.temp - 273.15))
    }
    //weatherId = {weather.id} 
    return (
        <div onClick={handleClick} className={` ${!onHomePage ?'' :'m-4 rounded-xl'} p-6 text-sm text-slate-50 shadow-lg today-color cursor-pointer`}>
            {!onHomePage ? <DetailHeader cityName={cityName}></DetailHeader> : ""}
            <WeatherTimeDetail timeZone={timeZone}></WeatherTimeDetail>
            <WeatherDetail weatherId={currentWeather.id} temp={temp} description={currentWeather.description}></WeatherDetail>
            <div>
                <div className={`${!onHomePage ? ' justify-center' : ''} mt-4 text-left flex items-center`}>
                    <span className=' pr-2'>Refresh at 3:00</span>
                    <RotateLeftOutlinedIcon sx={{fontSize : 16}}></RotateLeftOutlinedIcon>
                </div>
            </div>
        </div>
    );
};

export default Content;