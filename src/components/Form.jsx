import { useState } from "react"
import useWeather from "../hooks/UseWeather"


const Form = () => {
    
    const [alert, setAlert] = useState('')

    const { search, dataSearch, consultWeather } = useWeather()
    const { city, country } = search

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(search).includes('')) {
            setAlert('All fields are required')
            return
        }

        consultWeather(search)
    }




  return (
    <div className="contenedor">

        {alert && <p>{alert}</p>}
        <form
            onSubmit={handleSubmit} 
            >
            <div className="campo">
                <label htmlFor="city">City</label>
                <input
                type="text"
                id=""
                name="city"
                onChange={dataSearch}
                value={city}
                />
            </div>
            <div className="campo">
                <label htmlFor="country">Country</label>
                <select 
                name="country" 
                id="country"
                onChange={dataSearch}
                value={country}
                >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>

                </select>
            </div>

            <input
            type="submit"
            value='Check weather'>
            </input>
        </form>
    </div>
  )
}

export default Form