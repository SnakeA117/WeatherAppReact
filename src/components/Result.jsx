import useWeather from "../hooks/UseWeather"


const Result = () => {

    const { result } = useWeather()
    const { name, main } = result
    
    // Kelvin

    const kelvin = 273.15
  return (
    <div className="contenedor clima">
        <h2>{name} weather is:</h2>
        <p>
            { parseInt(main.temp - kelvin) } <span>&#x2103;</span>
        </p>
        <div className="temp_min_max">
        <p>
            Min: { parseInt(main.temp_min - kelvin) } <span>&#x2103;</span>
        </p>
        <p>
            Max: { parseInt(main.temp_max - kelvin) } <span>&#x2103;</span>
        </p>
        </div>


    </div>
  )
}

export default Result