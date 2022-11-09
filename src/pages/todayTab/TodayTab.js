import React, {useEffect, useState} from 'react';
import axios from "axios";
import './TodayTab.css';
import WeatherDetail from '../../components/weatherDetail/WeatherDetail';
import createTimeString from '../../helpers/createTimeString';


const apiKey2 = 'd41c8f9a22da2df9e111d48dd05e8a7a';

function TodayTab({coordinates}) {
    const [forecasts, setForecasts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect((forecast) => {
            async function fetchData() {
                toggleError(false);
                toggleLoading(true);


                try {
                    const result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&&appid=${apiKey2}&lang=nl`);
                    console.log(result.data.list[10],
                        result.data.list[20],
                        result.data.list[30]);

                    setForecasts(result.data.list.slice(1, 6));

                    console.log(forecasts);

                } catch (e) {
                    console.error(e);
                    toggleError(true);
                }
                toggleLoading(false);
            }

            if (coordinates) {
                fetchData();
            }

        },
        [coordinates]);



    return (
        <div className="tab-wrapper">
            <div className="chart">
                {forecasts.map((forecast) => {
                	return <WeatherDetail
                		key={forecast.dt}
                		temp={forecast.temp}
                		description={forecast.weather[0].description}
                	/>
                })}
            </div>
            <div className="legend">
                <span>08:00 uur</span>
                <span>12:00 uur</span>
                <span>16:00 uur</span>
            </div>
        </div>
    );
}

export default TodayTab;
