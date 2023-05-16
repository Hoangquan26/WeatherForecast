import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Content from './component/Content/Content'
import WeatherInDay from './component/WeatherInDay/WeatherInDay'
import {currentCityContext, setCurrentCityContext, onHomePageContext, setOnHomePageContext} from './weatherContext.js'
import OtherCity from './component/OtherCity/OtherCity'
import myApiKey from './myApiKey'
import DetailPage from './component/DetailPage/DetailPage'
import Loading from './component/Loading/Loading'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentCity, setCurrentCity] = useState('Ha Noi')
  const [weatherObject, setWeatherObject] = useState({})
  const [onHomePage, setOnHomePage] = useState(true)
  const [otherCity, setOtherCity] = useState([])
  useEffect(() => {
    let ignore = false
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${myApiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if(!ignore){
        setWeatherObject({
          ...data
        }
        )
        setIsLoading(false)
      }
    }, [currentCity])
    .catch(error => console.error(error))
    return () => ignore = true
  },[currentCity])
  const city = [
      'London',
      'Ho Chi Minh',
      'Tokyo'
  ]


  useEffect(() => {
    let ignore = false;
    const otherCityPromise = new Promise((resolve) => {
      let i = 0;
      let newArray = []
      city.forEach(item => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${myApiKey}`)
      .then(response => response.json())
      .then(data => {
          let object = {}
          if(data && !ignore){
              object.temp = Math.floor(data.main.temp - 273.15)
              object.status = data.weather[0]
              object.name = data.name
              newArray.push(data)
              i++;
          }
          if(i == 3)
          resolve(newArray)
      })
      // .then(data => {
      //   if(otherCity.length > 0)
      //     setOtherCity([
      //       ...otherCity,
      //       newArray
      //     ])
      //   else
      //     setOtherCity(newArray)
      // })
      .catch(error => console.error(error))
    })
  })
  otherCityPromise
    .then(data => {
      setOtherCity(data)
      setIsLoading(false)
    })
    return () => ignore = true
  }, [])
  // useEffect(() => {
  //   let id = null;
  //   if(isLoading){
  //     setTimeout(() => {
  //       id = setIsLoading(false)
  //     }, 1000)
  //   }
  //   return () => clearTimeout(id)
  // }, [])
  return (
    <>
    {isLoading ? <Loading></Loading> : null}
    <currentCityContext.Provider value={currentCity}>
      <setCurrentCityContext.Provider value={setCurrentCity}>
        <onHomePageContext.Provider value={setOnHomePage}>
          <setOnHomePageContext.Provider value = {onHomePage}>
            {onHomePage ? <Header cityName={weatherObject.name}></Header> : ''}
            <Content cityName={weatherObject.name} weather={weatherObject.weather} main={weatherObject.main}></Content>
            <WeatherInDay></WeatherInDay>
            {onHomePage ? <OtherCity otherCity={otherCity}></OtherCity> : <DetailPage weatherObject={weatherObject}></DetailPage>}
          </setOnHomePageContext.Provider>
        </onHomePageContext.Provider>
      </setCurrentCityContext.Provider>
    </currentCityContext.Provider>
    </>
  )
}

export default App
