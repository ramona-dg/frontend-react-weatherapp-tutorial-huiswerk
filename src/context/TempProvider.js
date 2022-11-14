import React, { createContext } from "react";
import kelvinToFahrenheit from "../helpers/kelvinToFahrenheit";
import kelvinToCelsius from "../helpers/kelvinToCelsius";

export const TempContext = createContext(null);

function TempContextProvider({ children }){
    const [selectedMetric, toggleSelectedMetric] = useState('celsius');

    function toggleTemp() {
        if (selectedMetric === 'celsius') {
            toggleSelectedMetric('fahrenheit');celsius
        } else {
            toggleSelectedMetric('celsius');
        }
    }

    return(
        <TempContext.Provider value={{
            toggleTemp: toggleTemp,
            kelvinToMetric: selectedMetric === 'celsius' ? kelvinToCelsius : kelvinToFahrenheit,
        }}
        >
            { children }
        </TempContext.Provider>
    )
}

export default TempContextProvider;
