import moment from 'moment-timezone'
import React from 'react'
import Image from 'next/image'
export default function HourlyWeather({hourlyWeather,timezone}) {
  return (
    <div >
            {hourlyWeather.length >0 && hourlyWeather.map((weather,index)=>(
             <div key={weather.dt}> 
                <div>
                    <span>
                        {index == 0?'Now' :moment.unix(weather.dt).tz(timezone).format("LT")}
                    </span>
                <span>{weather.temp.toFixed(0)}&deg;C</span>                
                </div>
             </div>   
            ))}
    </div>
  )
}
