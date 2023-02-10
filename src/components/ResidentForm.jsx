import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
  return (
    <form className='redidentFrom' onSubmit={handleSubmit}  >
        <input className='redidentFrom__input' type="text" id='idLocation' placeholder='type a location id'/>
        <button className='redidentFrom__button'>Search</button>
    </form>
  )
}

export default ResidentForm