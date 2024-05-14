import React from "react";

export const temperatureContext = React.createContext({
    celsius: 0,
    setCelsius: () => 0,
    fahrenheit: 32,
    setFahrenheit: () => 0,
});