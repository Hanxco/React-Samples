import React from 'react';
import { convertKelvinToFahrenheit } from '../helper'
import PropTypes from 'prop-types';

const Clima = ( {resultado} ) => {
    const { name, main, weather } = resultado;

    const icon = "http://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png";
    
    if (!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <div className="center-align">
                    <img 
                        className="" 
                        alt="icon"
                        src={icon}
                    />
                    <p><h6>{weather[0].description}</h6></p>
                </div>
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                {    convertKelvinToFahrenheit(main.temp).toFixed(2)  } <span> &#x2103; </span>
                </p>
                <p>Temperatura máxima: 
                {    convertKelvinToFahrenheit(main.temp_max).toFixed(2)  } <span> &#x2103; </span>
                </p>
                <p>Temperatura minima: 
                {    convertKelvinToFahrenheit(main.temp_min).toFixed(2)  } <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;