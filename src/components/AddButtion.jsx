import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '../assets/add.png'

const AddButtion = () => {
  return (
    <div>
        <Link to='/note/new' className='floating-button'>
            <img src={AddIcon} alt="image" />
        </Link>
    </div>
  )
}

export default AddButtion