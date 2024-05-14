import React from "react";
import { temperatureContext } from './contexts/AppContext'

export const CtoFConvUsingContext = () => {

    const tempContext = React.useContext(temperatureContext);

    const [doesWaterBoil, setWaterBoil] = React.useState('');

    const calcCelsius = (e) => {
        const celsiusValue = e.target.value;
        tempContext.setCelsius(celsiusValue)
        tempContext.setFahrenheit((celsiusValue * 9/5) + 32);
        setWaterBoil(celsiusValue >= 38 ? 'Water will boil at this temperature' : 'Water will NOT boil at this temperature')
    }

    const calcFaranheit = (e) => {
        const faranheitValue = e.target.value; 
        tempContext.setFahrenheit(faranheitValue)
        tempContext.setCelsius((faranheitValue - 32)*5/9);
    }

    return <div>
        <h1>Assignment 6 - Celsius to Faranheit using Context</h1>

        <label style={{fontWeight:"bold"}}>Enter temperature in Celsius:</label>
        <input 
            id="celsius" 
            value={tempContext.celsius}
            onChange={calcCelsius}
            placeholder="Enter celsius" 
            type="number" 
            style={{marginLeft: "5px"}}>    
        </input>

        <br />
        <br />
        <label style={{fontWeight:"bold"}}>Enter temperature in Faranheit:</label>
        <input 
            id="faranheit"
            value={tempContext.fahrenheit}
            onChange={calcFaranheit} 
            placeholder="Enter faranheit" 
            type="number" 
            style={{marginLeft: "5px"}}>
        </input>
        <br />
        <br />
        <lable>{doesWaterBoil}</lable>
    </div>
}