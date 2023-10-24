
import useWeather from '../hooks/UseWeather'
import Form from './Form'
import Loading from './Loading'
import Result from './Result'



const AppWeather = () => {

  const { result, loading, nonResult } = useWeather()
  return (
    <>
        <main className="dos-columnas">
            <Form/>

            { 
            
            loading ? <Loading/> :
            result?.name ? <Result/> :
             nonResult ? <p>{nonResult}</p> : <p>Weather will show here:</p>
            }

        </main>
    </>
  )
}

export default AppWeather