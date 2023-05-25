import React, {  useState } from 'react'
import WeatherDisplay from './WeatherDisplay';
export default function WeatherApp() {

  const [search,setSearch]=useState("");
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e){
    e.preventDefault()
    setIsSubmitted(true);
    fetchData();
}
  
  function fetchData(){
    setError(null)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4d1d2008656d77ddb6b35b8345857bdb&units=metric`)
    .then(res => {
      if (!res.ok) {
        throw new Error(
          `* Failed to retrieve weather data.
    Possible reasons:
    ->incorrect city name
    ->API service temporarily unavailable.`
           );
      }
      return res.json();
    })
    .then(data=>{
      setData(data);
      setError(null); //to clear any previous error if present
    })
    .catch(error=>setError(error.message))
  }

    return (
      <div>
        <p className='text-4xl  text-center mt-10 font-bold text-[#F9F871] 
        first:text-5xl second:text-6xl third:text-7xl'>Weather App</p>
        <form className='max-w-[280px] flex items-baseline relative first:max-w-[410px] second:max-w-[610px] third:max-w-[810px]' onSubmit={handleSubmit}>
      <input 
      className="h-searchBox my-14 border-4 border-emerald-200 rounded-md w-[200px]
      first:w-[400px] 
      second:w-[600px]
      third:w-[700px]"
      required
      type="text" value={search} placeholder='   Enter City Name eg: Delhi' 
      onChange={(e)=>{
        setSearch(e.target.value)
      }}
      />
      <button className='ml-2 h-searchBox bg-[#005071] text-white hover:text-[#C2DCD6] shadow-sm'>Search</button>
      </form>
      <div >
      { isSubmitted && <WeatherDisplay 
      data={data} 
      error={error}
      />}
      </div>
      </div>
      
    )
  }


