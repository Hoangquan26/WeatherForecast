import React, { useContext } from 'react';
import { setOnHomePageContext } from '../../weatherContext';
import weatherImgSrc from '../weatherImgSrc';
const WeatherDetail = ({weatherId, temp, description}) => {
    const url = `${weatherImgSrc[weatherId]}`
    const onHomePage = useContext(setOnHomePageContext)
    return (
        <div className={`${!onHomePage ? 'flex-col' : ''} flex mt-2 mb-2 items-center `}>
            <div>
                <img src={url} className=' h-24 w-24'></img>
            </div>
            <div className={`${!onHomePage ? ' justify-center' : ''} flex flex-col text-xl text-left`}>
                <h4 className={`${!onHomePage ? ' text-center' : ''}`}>{temp}&deg; C</h4>
                <h4 className=' font-medium'>{description}</h4>
            </div>
        </div>
    );
};

export default WeatherDetail;