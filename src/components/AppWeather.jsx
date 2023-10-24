
import useWeather from '../hooks/UseWeather'
import Form from './Form'
import Result from './Result'


const AppWeather = () => {

  const { result } = useWeather()
  return (
    <>
        <main className="dos-columnas">
            <Form/>

            { result?.name && <Result/>}
  
        </main>
    </>
  )
}

export default AppWeather