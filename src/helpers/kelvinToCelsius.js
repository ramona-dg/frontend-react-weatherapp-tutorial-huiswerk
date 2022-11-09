//Korte uitgeschreven:
//
// export default (kelvin) => `${Math.round(kelvin - 273.15)}° C`;



// Uitgebreid uitgeschreven javascript functie:
function kelvinToCelsius(kelvin) {
    return `${Math.round(kelvin - 273.15)}° C`;
}

export default kelvinToCelsius;