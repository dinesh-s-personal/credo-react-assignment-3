import React from "react";

export const CtoFConvertor = () => {

    const [doesWaterBoil, setWaterBoil] = React.useState('');
    const [celsius, setCelsius] = React.useState(0);
    const [faranheit, setFaranheit] = React.useState(32);

    const calcCelsius = (e) => {
        setCelsius(e.target.value)
        setFaranheit((celsius * 9/5) + 32);
        setWaterBoil(celsius >= 36 ? 'Water will boil at this temperature' : 'Water will NOT boil at this temperature')
    }

    const calcFaranheit = (e) => {
        setFaranheit(e.target.value)
        setCelsius((faranheit - 32)*5/9);
    }

    return <div>
        <h1>Assignment 3 - Celsius to Faranheit</h1>

        <label style={{fontWeight:"bold"}}>Enter temperature in Celsius:</label>
        <input 
            id="celsius" 
            value={celsius}
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
            value={faranheit}
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