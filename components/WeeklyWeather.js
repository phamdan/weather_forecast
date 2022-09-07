import moment from 'moment';
import React from 'react'
import Image from 'next/image';
export default function WeeklyWeather({ weeklyWeather, timezone }) {
  return (
    <div >
        <h3 >
            Weekly Weather
        </h3>
        {weeklyWeather.length > 0 && weeklyWeather.map((weather,index)=>{
            if(index==0){
                return;
            }
            return(
                <div >
                    <div >
                            <div>
                                <h3>
                                    {moment.unix(weather.dt).tz(timezone).format("dddd")}
                                </h3>
                                <h4>
                                   <span>{weather.temp.max.toFixed(0)}&deg;C</span> 
                                   <span>{weather.temp.min.toFixed(0)}&deg;C</span> 
                                </h4>
                            </div>  
                            <div>
                                <div>
                                    <span>Sunrise</span>
                                    <span>
                                        {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                                    </span>
                                </div>
                                <div>
                                    <span>Sunset</span>
                                    <span>
                                        {moment.unix(weather.sunset).tz(timezone).format("LT")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h5>
                                {weather.weather[0].description}
                            </h5>
                        </div>
                    </div>
            );
        })}
    </div>
  )
}
