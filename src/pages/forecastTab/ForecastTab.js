import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForecastTab.css';

const apiKey2 = 'd41c8f9a22da2df9e111d48dd05e8a7a';

function ForecastTab({ coordinates, locationQuerty }) {
    const [forecasts, setForecasts] = useState([]);
    // console.log(coordinates);

    useEffect(() => {
        console.log(coordinates);
        async function fetchData() {
            try {
                const result  = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey2}`);
                console.log(result.data);
                setForecasts(result.data);

            } catch (e) {
                console.error(e);
            }
        }
        if (coordinates) {
            fetchData();
        }

    }, [coordinates]);
    //
    // console.log(forecasts);

    return (
        <div className="tab-wrapper">
            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>

            <article className="forecast-day">
                <p className="day-description">
                    Maandag
                </p>

                <section className="forecast-weather">
            <span>
              12&deg; C
            </span>
                    <span className="weather-description">
              Licht Bewolkt
            </span>
                </section>
            </article>
        </div>
    );
};

export default ForecastTab;