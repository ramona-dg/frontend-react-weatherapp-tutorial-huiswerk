import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ForecastTab.css';
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import createDateString from "../../helpers/createDateString"

const apiKey2 = 'd41c8f9a22da2df9e111d48dd05e8a7a';

function ForecastTab({coordinates}) {
    const [forecasts, setForecasts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    //Create date from date number(seconds count from 1970). Hier is een functie voor geschreven in helper map


    //different API used then study book
    useEffect(() => {
        console.log(coordinates);

        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&&appid=${apiKey2}&lang=nl`);
                console.log(result.data);
                setForecasts(result.data.list.slice(1, 6));

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (coordinates) {
            fetchData();
        }

    }, [coordinates]);
    //
    // console.log(forecasts);

    return (
        <div className="tab-wrapper">
            {/*hieronder worden errors afgevangen met tekst in UI*/}
            {loading && <span>Loading...</span>}
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {forecasts.length === 0 && !error &&
                <span className="no-forecast">
      Zoek eerst een locatie om het weer voor deze week te bekijken
    </span>
            }
            {forecasts.map((day) => {
                return (
                    <article className="forecast-day" key={day.dt}>
                        <p className="day-description">
                            {createDateString(day.dt)}
                        </p>

                        <section className="forecast-weather">
            <span>
              {kelvinToCelsius(day.main.temp)}
            </span>
                            <span className="weather-description">
              {day.weather[0].description}
            </span>
                        </section>
                    </article>
                );
            })}

        </div>
    );
}

export default ForecastTab;