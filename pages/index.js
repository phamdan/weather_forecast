import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBox from '../components/SearchBox'
import cities from "../lib/city.list.json";
import moment from 'moment-timezone';
let RandomData = []
const getHourlyWeather = (hourlyData,timezone)=>{
  const endOfDay = moment().tz(timezone).endOf('day').valueOf();
  const endTimeStamp = Math.floor(endOfDay/1000)

  const todaysData = hourlyData.filter(data => data.dt<endTimeStamp);
  return todaysData;
}
export async function getServerSideProps(context){
  const res1 = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=46.518021&lon=-95.376152&appid=7b26c92417fd3678d52eac12dc870222&exclude=minutely&units=metric`
  );    
  const data1 = await res1.json();
  const city1 = getHourlyWeather(data1.hourly,data1.timezone);
  
  const res2 = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=21.0245&lon=105.841171&appid=7b26c92417fd3678d52eac12dc870222&exclude=minutely&units=metric`
  );    
  const data2 = await res2.json();
  const city2 = getHourlyWeather(data2.hourly,data2.timezone);
  
  const res3 = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=10.75&lon=106.666672&appid=7b26c92417fd3678d52eac12dc870222&exclude=minutely&units=metric`
  );    
  const data3 = await res3.json();
  const city3 = getHourlyWeather(data3.hourly,data3.timezone);
  
  const res4 = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=47.159401&lon=34.330502&appid=7b26c92417fd3678d52eac12dc870222&exclude=minutely&units=metric`
  );    
  const data4 = await res4.json();
  const city4 = getHourlyWeather(data4.hourly,data4.timezone);
  return{
    props:{
        city1:city1[0],
        city2:city2[0],
        city3:city3[0],
        city4:city4[0],
    },
};
}
export default function Home({city1,city2,city3,city4}){
  let matchingCities = [];
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }
        else{
          const cityData = {
            ...city,
        }
          matchingCities.push(cityData);
        }
  }
  return(
      <div>
        <div className='home'>
          <div className='container'>
            <SearchBox/>
          </div>
        </div>
      </div>
  )
}