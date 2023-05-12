import React from 'react';
const weatherIcon = {
    801 : 'https://openweathermap.org/img/wn/02d@2x.png',
    802: 'https://openweathermap.org/img/wn/03d@2x.png',
    803: 'https://openweathermap.org/img/wn/04d@2x.png',
    804: 'https://openweathermap.org/img/wn/04d@2x.png',
    800: 'https://openweathermap.org/img/wn/01d@2x.png',
    600: 'https://openweathermap.org/img/wn/13d@2x.png',
    601: 'https://openweathermap.org/img/wn/13d@2x.png',
    602: 'https://openweathermap.org/img/wn/13d@2x.png',
    611: 'https://openweathermap.org/img/wn/13d@2x.png',
    612: 'https://openweathermap.org/img/wn/13d@2x.png',
    613: 'https://openweathermap.org/img/wn/13d@2x.png',
    615: 'https://openweathermap.org/img/wn/13d@2x.png',
    616: 'https://openweathermap.org/img/wn/13d@2x.png',
    620: 'https://openweathermap.org/img/wn/13d@2x.png',
    621: 'https://openweathermap.org/img/wn/13d@2x.png',
    622: 'https://openweathermap.org/img/wn/13d@2x.png',
    701: 'https://openweathermap.org/img/wn/50d@2x.png',
    711: 'https://openweathermap.org/img/wn/50d@2x.png',
    721: 'https://openweathermap.org/img/wn/50d@2x.png',
    731: 'https://openweathermap.org/img/wn/50d@2x.png',
    741: 'https://openweathermap.org/img/wn/50d@2x.png',
    751: 'https://openweathermap.org/img/wn/50d@2x.png',
    761: 'https://openweathermap.org/img/wn/50d@2x.png',
    771: 'https://openweathermap.org/img/wn/50d@2x.png',
    781: 'https://openweathermap.org/img/wn/50d@2x.png',
    762: 'https://openweathermap.org/img/wn/50d@2x.png',
    500: 'https://openweathermap.org/img/wn/10d@2x.png',
    501: 'https://openweathermap.org/img/wn/10d@2x.png',
    502: 'https://openweathermap.org/img/wn/10d@2x.png',
    503: 'https://openweathermap.org/img/wn/10d@2x.png',
    504: 'https://openweathermap.org/img/wn/10d@2x.png',
    511: 'https://openweathermap.org/img/wn/13d@2x.png',
    520: 'https://openweathermap.org/img/wn/09d@2x.png',
    521: 'https://openweathermap.org/img/wn/09d@2x.png',
    522: 'https://openweathermap.org/img/wn/09d@2x.png',
    531: 'https://openweathermap.org/img/wn/09d@2x.png',
    300: 'https://openweathermap.org/img/wn/09d@2x.png',
    301: 'https://openweathermap.org/img/wn/09d@2x.png',
    302: 'https://openweathermap.org/img/wn/09d@2x.png',
    310: 'https://openweathermap.org/img/wn/09d@2x.png',
    311: 'https://openweathermap.org/img/wn/09d@2x.png',
    312: 'https://openweathermap.org/img/wn/09d@2x.png',
    313: 'https://openweathermap.org/img/wn/09d@2x.png',
    314: 'https://openweathermap.org/img/wn/09d@2x.png',
    321: 'https://openweathermap.org/img/wn/09d@2x.png',
    200: 'https://openweathermap.org/img/wn/11d@2x.png',
    201: 'https://openweathermap.org/img/wn/11d@2x.png',
    202: 'https://openweathermap.org/img/wn/11d@2x.png',
    210: 'https://openweathermap.org/img/wn/11d@2x.png',
    211: 'https://openweathermap.org/img/wn/11d@2x.png',
    212: 'https://openweathermap.org/img/wn/11d@2x.png',
    221: 'https://openweathermap.org/img/wn/11d@2x.png',
    230: 'https://openweathermap.org/img/wn/11d@2x.png',
    231: 'https://openweathermap.org/img/wn/11d@2x.png',
    232: 'https://openweathermap.org/img/wn/11d@2x.png'
}
const WeatherCard = ({weather, time, temperature}) => {
    return (
        <>
            <div className=' flex flex-col p-2 pt-4 pb-4 items-center rounded-lg today-card-color mr-2 col-span-1'>
                <div>
                    <img src={weatherIcon[weather.id]} className=' object-cover object-center h-12 w-12'></img>
                </div>
                <div>
                    <h5 className=' font-medium'>{temperature}&deg; C</h5>
                </div>
                <div>
                    <p>{time}</p>
                </div>
            </div>
        </>
    );
};

export default WeatherCard;