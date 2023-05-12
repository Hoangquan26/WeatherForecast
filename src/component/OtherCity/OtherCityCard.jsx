import React, { useContext } from 'react';
import weatherImgSrc from '../weatherImgSrc';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { onHomePageContext, setCurrentCityContext } from '../../weatherContext';
const OtherCityCard = ({cityName, weather, temp}) => {
    const setCurrentCity = useContext(setCurrentCityContext)
    const setOnHomePage = useContext(onHomePageContext)
    const handleClick = () => {
        setCurrentCity(cityName)
        setOnHomePage(false)
    }
    return (
        <div className='flex justify-between p-4 card-color mt-4 rounded-2xl items-center' onClick={handleClick}>
            <div className='h-12 w-12 rounded-full card-image-color mr-2' style={{backGroundColor: '9AB6FF'}}>
                <img className=' h-full w-full object-cover object-center' src={weatherImgSrc[weather?.id]}></img>
            </div>
            <div className=' w-1/2 flex flex-col ml-1 mr-1 text-left'>
                <p className=' font-medium text-base'>{cityName}</p>
                <p>{weather?.description}</p>
            </div>
            <div className=' justify-self-end flex items-center'>
                <p className=' font-medium pr-4'>{temp}&deg; C</p>
                <ArrowForwardIosOutlinedIcon sx={{fontSize: 12, fontWeight: 300}}></ArrowForwardIosOutlinedIcon>
            </div>
        </div>
    );
};

export default OtherCityCard;