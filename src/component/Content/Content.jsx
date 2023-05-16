import React, { useContext } from 'react';
import WeatherDetail from './WeatherDetail';
import WeatherTimeDetail from './WeatherTimeDetail';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import { currentTimeContext, onHomePageContext, setCurrentTimeContext, setOnHomePageContext } from '../../weatherContext';
import DetailHeader from '../DetailPage/DetailHeader';
const Content = ({weather, main, cityName, timeZone}) => {
    const setOnHomePage = useContext(onHomePageContext)
    const onHomePage = useContext(setOnHomePageContext)
    const currentDate = useContext(currentTimeContext)
    const setCurrentDate = useContext(setCurrentTimeContext)
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
                    <span className=' pr-2'>{`Refresh at ${currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`}</span>
                    <RotateLeftOutlinedIcon onClick={(e) => {
                        e.stopPropagation()
                        setCurrentDate(new Date(new Date() - (timeZone*1000 + 7 * 3600000)))}
                    } sx={{fontSize : 16}}></RotateLeftOutlinedIcon>
                </div>
            </div>
        </div>
    );
};

export default Content;