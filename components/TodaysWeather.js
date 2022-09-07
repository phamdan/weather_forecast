import React from 'react'
import moment from 'moment-timezone'
import Image from 'next/image';
export default function TodaysWeather({city,weather,timezone}) {
  return (
            <div>
                <h1>
                    {city.name}({city.country})
                </h1>
                <h2>
                    <span>
                        {weather.temp.min.toFixed(0)}&deg;C
                    </span>
                    <span>
                        {weather.temp.max.toFixed(0)}&deg;C
                    </span>
                </h2>
                <div >
                    <div>
                        <span>Sunrise</span>
                        <span>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</span>
                    </div>
                    <div>
                        <span>Sunset</span>
                        <span>{moment.unix(weather.sunset).tz(timezone).format("LT")}</span>
                    </div>

            
                    <h3>
                        {weather.weather[0].description}
                    </h3>

        </div>
    </div>
  )
}
