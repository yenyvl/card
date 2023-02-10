import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({RESIDENTS_PERPAGE,setPage,location}) => {
  return (
    <ul className='pagination'>
        {
          numbersPage(location,RESIDENTS_PERPAGE).map(numberPage => 
          <li className='pagination__num' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li> )
        }
      </ul>
  )
}

export default Pagination