import {React, useEffect, useState} from 'react';
import CompressRoundedIcon from '@mui/icons-material/CompressRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import myApiKey from '../../myApiKey'
const DetailPage = ({weatherObject}) => {
    // console.log(weatherObject, myApiKey)
    // const [imgData, setImgData] = useState(null)
    // useEffect(() => {
    //     let ignore = false
    //     const layer = weatherObject.main.id < 600 ? "PAR0" : "TA2"
    //     const url = `https://maps.openweathermap.org/maps/2.0/weather/1h/${layer}/25/${Math.floor(weatherObject.coord.lat)}/${Math.floor(weatherObject.coord.lon)}?appid=${myApiKey}`
    //     fetch(url)
    // },[])
    return (
        <div className='m-4 mt-6 flex flex-col'>
            <h3 className=' text-left font-medium text-xl '>Detail Information</h3>
            <div className=' grid w-full grid-rows-3 grid-cols-2 gap-3 mt-4'>
                <div className=' today-card-color rounded-xl mg-2 flex items-center p-3'>
                    <div className=' pr-2 h-10 w-10 flex items-center justify-center'>
                        <CompressRoundedIcon sx={{fontSize: 32, color :'#3C6EEF'}}></CompressRoundedIcon>
                    </div>
                    <div className=' flex flex-col text-left'>
                        <h4 className=' text-2xl font-medium'>{weatherObject.main.pressure} hPa</h4>
                        <span>Atmospheric pressure</span>
                    </div>
                </div>
                <div className=' today-card-color rounded-xl mg-2 flex items-center p-3'>
                    <div className=' pr-2'>
                        <AirRoundedIcon sx={{fontSize: 32, color :'#3C6EEF'}}></AirRoundedIcon>
                    </div>
                    <div className=' flex flex-col text-left'>
                        <h4 className=' text-2xl font-medium'>{weatherObject.wind.speed} m/s</h4>
                        <span>Widny</span>
                    </div>
                </div>
                <div className=' today-card-color rounded-xl mg-2 flex items-center p-3'>
                    <div className=' pr-2'>
                        <WaterDropRoundedIcon sx={{fontSize: 32, color :'#3C6EEF'}}></WaterDropRoundedIcon>
                    </div>
                    <div className=' flex flex-col text-left'>
                        <h4 className=' text-2xl font-medium'>{weatherObject.main.humidity} %</h4>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className=' today-card-color rounded-xl mg-2 flex items-center p-3'>
                    <div className=' pr-2'>
                        <VisibilityIcon sx={{fontSize: 32, color :'#3C6EEF'}}></VisibilityIcon>
                    </div>
                    <div className=' flex flex-col text-left'>
                        <h4 className=' text-2xl font-medium'>{weatherObject.visibility/1000.0} km</h4>
                        <span>Visibility</span>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DetailPage;