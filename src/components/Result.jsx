import useWeather from "../hooks/UseWeather"


const Result = () => {

    const { result } = useWeather()
    const { name, main } = result
    
    // Kelvin

    const kelvin = 273.15
  return (
    <div className="contenedor">
        <h2>{name} weather is:</h2>
        <p>
            Actual Temp: { parseInt(main.temp - kelvin) } <span>&#x2103;</span>
        </p>
        <p>
            Min Temp: { parseInt(main.temp_min - kelvin) } <span>&#x2103;</span>
        </p>
        <p>
            Max Temp: { parseInt(main.temp_max - kelvin) } <span>&#x2103;</span>
        </p>

    </div>
  )
}

export default Result