import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { getRandomNumber } from './utils/handleRandom'

const RESIDENTS_PERPAGE = 12;

function App() {
  //estado que almacena informacion de location
  const [location, setLocation] = useState()
  //estado que almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  //funcion que se ejecuta en el submit del frmulario
  const handleSubmit = (e) => {
    e.preventDefault ()
    setNameLocation(e.target.idLocation.value);
  }

// funcion que se encarga de obtener los residentes dependiendo de la pagina actual
  const pagination = () => {
    const maxLimit= page* RESIDENTS_PERPAGE;
    const minLimit= maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit,maxLimit);
    return newResidents 
  } 

  //efecto que ejecuta en el primer render y cuando cambia nameLocation 
  useEffect(() => {
    setPage(1);
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation;
    const URL = ` https://rickandmortyapi.com/api/location/${dimension}` ;
    axios.get(URL)
      .then((res)=>setLocation(res.data))
      .catch((err)=>console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <div className='img__body'>
      </div>
      <ResidentForm handleSubmit={handleSubmit}/>
      <LocationInfo location={location}/>
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage}/>

      <ResidentList pagination={pagination} />
      <Pagination location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage}/>
    </div>
  )
}

export default App
