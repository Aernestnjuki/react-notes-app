import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../assets/data'
import { Link } from 'react-router-dom'
import ArrowLeft from '../assets/arrowLeft.png'


const NotePage = () => {

    const { id } = useParams()
    const note = notes.find(note => note.id === Number(id))
    console.log("Props:", id)
  return (
    <div className='note'>
        <div className="note-header">
            <h3>
                <Link to="/">
                    <img src={ArrowLeft} alt="image" />
                </Link>
            </h3>
        </div>
        <textarea value={note?.body}></textarea>
    </div>
  )
}

export default NotePage