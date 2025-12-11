/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { WeatherService } from '../src/Service/weatherService';
import type { Weather } from '../src/Model/weather';
import { CurrentWeather } from './UI/WeatherForecast';

export const App: React.FunctionComponent = () => {
    const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        const weatherService = new WeatherService();
        try {
            const { current } = await weatherService.GetWeatherFromAPI();
            setCurrentWeather(current);
        }
        catch (err) {
            setError("Failed to fetch weather data. Please try again.");
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <p className="text-center">Loading weather data...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!currentWeather) return <p className="text-center">No weather data available</p>;

    return (
        <>
            <CurrentWeather weather={currentWeather} />
        </>
    );
};

export default App;