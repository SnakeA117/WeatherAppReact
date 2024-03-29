import axios from "axios";
import { useState, createContext } from "react";

const WeatherContext = createContext()
const WeatherProvider = ({children}) => {

    console.log(import.meta.env.VITE_API_KEY)

    const [search, setSearch] = useState({
        city: '',
        country: ''
    })

    const [result, setResult] = useState({})

    const [loading, setLoading] = useState(false)
    const [nonResult, setNonResult] =  useState(false)


    const dataSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })

        
    }

    const consultWeather = async datas => {

        setLoading(true)
        setNonResult(false)
        try {
            const { city, country } = datas
            const appId = import.meta.env.VITE_API_KEY

            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country},&limit=1&appid=${appId}`
            
            const { data } = await axios(url)
            const { lat, lon } = data[0]

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: weather } = await axios(urlWeather)
            setResult(weather)
         
        }catch (error) {
            setNonResult('No results found')
        } finally {
            setLoading(false)
        }

   
    }


    return (
        <WeatherContext.Provider
            value={{
                search,
                dataSearch,
                consultWeather,
                result,
                loading,
                nonResult,
                setResult
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext