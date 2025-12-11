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

        <div className='bg-light add'>
            <div className="row">
                <div className='col-md-6'>
                    <h4 className='m-3 text-primary'><b>CURRENT WEATHER</b></h4>
                </div>

            </div>
        </div>
    )
}