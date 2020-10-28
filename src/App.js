
import {useState} from 'react'
import SearchBox from './components/search'
import Result from './components/result'

const API = {
  cle: '200b01d1422a0be035b2231349dd26ae',
  base : 'https://api.openweathermap.org/data/2.5/'
}


function App() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})

  const get_weather_data = (e) =>{
      if (e.key === 'Enter'){
        fetch(`${API.base}weather?q=${city}&units=metric&APPID=${API.cle}`)
        .then(res => res.json())
        .then(resultat =>{
          setWeather(resultat)
          setCity(e.target.value = '')
          console.log(resultat)
        })
      }
  }
  //get_weather_data()

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp >= 17) ? 'app warm' : 'app'): 'app'}>
      <main>
      <SearchBox value={city} onChange={e => setCity(e.target.value)} onKeyPress={get_weather_data} />

      {(typeof weather.main != "undefined") ?
          <Result 
          temp={weather.main.temp}
          country={weather.sys.country}
          city ={weather.name}
          description ={weather.weather[0].description}
            />
     : null}
     </main>
    </div>
  )
}

export default App;
