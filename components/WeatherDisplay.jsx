import React from 'react'

function icon(id)
{
    let iconName;
    if(id>=200 && id<=232)
    {
      iconName='thunderstorm';
    }else
    if(id>=300 && id<=321)
    {
      iconName='drizzle';
    }else
    if(id>=500 && id<=531)
    {
      iconName='rain';
    }else
    if(id>=600 && id<=622)
    {
      iconName='snow';
    }else
    if(id>=701 && id<=781)
    {
      iconName='atmosphere';
    }else
    if(id==800)
    {
      iconName='clear';
    }else
    if(id>=801 && id<=804)
    {
      iconName='clouds';
    }
    
    return iconName;
}

const currentDate = new Date();

const options = {
  timeZone: 'UTC', // Set the timezone to UTC to get accurate UTC time
  weekday: 'long', // Display the full weekday name
  year: 'numeric', // Display the full year
  month: 'long', // Display the full month name
  day: 'numeric', // Display the numeric day of the month
};

// Format the date and time according to the specified options and city name
const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(currentDate);

//console.log(`Current date and time in ${cityName}: ${formattedDateTime}`);

const WeatherDisplay = ({ data ,error}) => {
    if (!data && !error) {
        return <div className='text-semibold text-white font-[60px]'>Loading...</div>;
      }
      else if(error)
      {
        return(
          <div className=' text-red-400 text-justify text-sm second:text-xl third:text-2xl '>
                    <pre>
                      <code>{error}</code> 
                    </pre>
          </div>
        )
      }
    else
      return (
        <div className='text-white text-justify'>
          <h6 className='text-small second:text-xl text-[#9bb437]'>{formattedDateTime}</h6>
          <h2 className='text-medium  font-bold second:text-3xl third:text-4xl'>{data.name}, {data.sys.country}</h2>
          <div className='text-large font-semibold flex items-center second:text-4xl third:text-5xl'>  {data.main.temp}°C    <img src={`/src/assets/${icon(data.weather[0].id)}.png`} alt='weather icon'/> </div>
          <p className='font-bold second:text-xl third:text-2xl'>Feels Like: {data.main.feels_like}°C.      {data.weather[0].description}</p>
          <p className='text-small2 second:text-xl third:text-2xl'>Humidity: {data.main.humidity}%      |    wind speed: {data.wind.speed} m/s</p>
          <p className='text-small2 second:text-xl third:text-2xl'>visibility: {data.visibility} m</p>
        </div>
      );
  };
export default WeatherDisplay
