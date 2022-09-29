import React from 'react';
import axios from 'axios';
import {useState} from "react";
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import './App.css';


// API key in var declareren buiten functie om zo elders te gebruiken
const apiKey = '91a962004b3210f115f522d6321f19fc';

function App() {
    //state aanmaken om data in op te vangen en te gebruiken buiten scope(bereik, in dit geval buiten functie)
    // weatherData is nu de gehele <App>-component beschikbaar
    const [weatherData, setWeatherData] = useState({});

// asynchrone functie geschreven om data op te halen van API
    async function fetchData() {
        try {
            // opgehaalde data in var result plaatsen
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
            // data van var result consollen
            console.log(result.data);
            // opgehaalde data in de state plaatsen om te kunnen gebruiken buiten de functie
            setWeatherData(result.data);

        } catch (e) {
            // error afvangen
            console.error(e);
        }
    }


    return (
    <>
    <div className="weather-container">


        {/*HEADER -------------------- */}
        <div className="weather-header">
            <SearchBar/>

                <span className="location-details">
                    {/*
                    Omdat de pagina eerst volledig rendert moeten we data die we opvragen in een object plaatsen
                    We zetten de gegevens die we opvragen in een object om te checken of de opgehaalde data leeg is of niet, aangezien we weatherData in de state leeg initialiseren en pas ophalen als er op de button wordt gedrukt zal hij anders een error geven.
                    Wanneer we structurele datatypes gebruiken (zoals objecten en arrays) zullen we moeten checken of er wel keys of waardes in staan, anders error*/}
                {Object.keys(weatherData).length > 0 &&
                    // hierboven wanneer Object.van de key weatherData.de lengte ervan >(groter dan 0) = true dan <>alles hierin weergeven</>
                    //is het false (dus nog niet op de ophaal knop gedrukt, dan geeft hij niks weer.
                    <>
                        <h2>{weatherData.weather[0].description}</h2>
                        <h3>  {weatherData.name}</h3>
                        <h1>{weatherData.main.temp} &deg;</h1>
                    </>
                }


          {/*De eventlistener onClick gebruiken om data op te halen bij click button*/}
              <button type="button" onClick={fetchData}>
              Haal data op!
              </button>
              </span>
              </div>

          {/*CONTENT ------------------ */}
              <div className="weather-content">
              <TabBarMenu/>

              <div className="tab-wrapper">
              Alle inhoud van de tabbladen komt hier!
              </div>
              </div>

              <MetricSlider/>
              </div>
              </>
              );
          }

                        export default App;
