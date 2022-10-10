import React, {useEffect, useState} from 'react';
import './ForecastTab.css';
import axios from "axios";

function ForecastTab({coordinates}) {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {

            console.log(coordinates);

        }
        , [coordinates]);

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
