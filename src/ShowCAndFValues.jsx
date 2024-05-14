import React from "react";
import { temperatureContext } from "./contexts/AppContext";

export const ShowCAndFValues = () => {

    const showTempContextValues = React.useContext(temperatureContext);

    return <div>
        <p>{showTempContextValues.celsius}</p>
        <p>{showTempContextValues.fahrenheit}</p>
    </div>

};