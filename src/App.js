import { useState } from 'react';
import './App.css';
function App() {

//Variables and useState Hooks
const key = `d4153b342010ef4174468b6454bc0e26`;
const [Data,setData] = useState([{}])
const [City,setCity] = useState("")

const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=${key}`

// getWeather Data

const getWeather = (event) =>{
  if(event.key =='Enter'){
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setData(data)
      setCity("")
    })
  }
}


  return (
    <div>
      <div>
        <h2 className='text-center mt-2 font-semibold text-2xl'> Open Weather App </h2>
      </div>
    <div className='flex flex-col justify-center items-center p-[25px]'>
      <input className='p-4 w-[80%] m-auto border-[1px solid] border-gray-200 rounded-lg text-base shadow-md shadow-[#888888] focus:outline-none' placeholder='Search City Here' 
      onChange={e => setCity(e.target.value)}
      value = {City} onKeyPress ={getWeather}
      />
    </div>
  </div>
  );
}

export default App;
