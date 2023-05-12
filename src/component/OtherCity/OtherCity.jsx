import React from 'react';
import OtherCityCard from './OtherCityCard';

const OtherCity = ({otherCity}) => {
    return (
        <div className=' m-4 mt-6 flex flex-col'>
            <h3 className=' text-left font-medium text-xl'>Other City</h3>
            {otherCity.map((value, index) => {
                return(
                    <OtherCityCard key={index} cityName={value.name} weather={value?.weather[0]} temp={Math.floor(value.main.temp - 273.15)}></OtherCityCard>
                    )
                })
            }
        </div>
    );
};

export default OtherCity;