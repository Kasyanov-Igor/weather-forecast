/* eslint-disable react-hooks/purity */
import React from 'react';
import type { Weather } from '../Model/weather';
import './WeatherForecast.css'; 

export const CurrentWeather: React.FunctionComponent<{ weather: Weather }> = ({ weather }) => {

    const date = Date.now();
    const dateNow = new Date(date).toLocaleDateString('ru-RU');

    const sunrise = new Date(weather.sunrise).toLocaleTimeString('ru-RU');

    const sunset = new Date(weather.sunset).toLocaleTimeString('ru-RU');

    return (

       <body>
        <div className='bg-light add'>
            <div className="row">
                <div className='col-md-6'>
                    <section className="wather-forecast">
                    <h1 className='m-3 text-primary'><b>Прогноз погоды</b></h1>
                    <h2 className='m-3 text-primary weather-info'><p>Дата {dateNow}</p></h2>
                    <h4 className='m-3 text-primary weather-info'><p>Рассвет с {sunrise}</p></h4>
                    <h4 className='m-3 text-primary weather-info'><p>Закат с {sunset}</p></h4>
                    <h4 className='m-3 text-primary city'><p>Город {weather.cityName}</p></h4>
                    
                    <h4 className='m-3 text-primary temperature-box'><p>Температура {weather.realFeel}</p></h4>
                    <h4 className='m-3 text-primary feels-like-box'><p> Ощущается {weather.temperatureCelsius}</p></h4>
                   <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="WeatherIcon" />
                    <h4 className='m-3 text-primary'><p>Состояние {weather.weatherConditions}</p></h4>
                    </section>
                </div>

            </div>
        </div>
        </body>

    )}
