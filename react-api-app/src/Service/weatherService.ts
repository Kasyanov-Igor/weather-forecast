import type { Weather } from '../Model/weather';
import axios from 'axios';

export class WeatherService {
	public async GetWeatherFromAPI(): Promise<{ current: Weather; }> {
		try {
			const currentLatitude = 55.45;
			const currentLongitude = 37.37;

			const apiKey = 'a0ad212cdc106fe979fe7c0cae409c45';
			if (!apiKey) {
				throw new Error('API key not set!');
			}

			const currentResponse = await axios.get<{
				main: { temp: number; feels_like: number };
				name: string;
				weather: Array<{ main: string; icon: string }>;
				wind: { speed: number };
				sys: { country: string; sunrise: number; sunset: number };
			}>(
				`https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`
			);

			const dataFromWeatherAPI = currentResponse.data;

			const currentWeather: Weather = {
				temperatureCelsius: dataFromWeatherAPI.main.temp,
				realFeel: dataFromWeatherAPI.main.feels_like,
				cityName: dataFromWeatherAPI.sys.country,
				sunrise: dataFromWeatherAPI.sys.sunrise,
				sunset: dataFromWeatherAPI.sys.sunset,
				weatherConditions: dataFromWeatherAPI.weather[0].main,
				icon: dataFromWeatherAPI.weather[0].icon
			};

			return {
				current: currentWeather,

			};
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Axios Error:', error.message);
				if (error.response) {
					console.error('Status:', error.response.status);
					console.error('Data:', error.response.data);
				}
			} else {
				console.error('Error fetching weather:', error);
			}
			throw error;
		}
	}
}