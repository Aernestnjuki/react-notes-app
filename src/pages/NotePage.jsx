import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import notes from '../assets/data'
import { Link } from 'react-router-dom'
import ArrowLeft from '../assets/arrowLeft.png'


const NotePage = () => {

    const { id } = useParams()

    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [id])


    // get a note by its id
    const getNote = async () => {

        if (id === 'id') return
        // const response = await fetch(`http://localhost:3000/notes/${id}`) // json-server local api
        const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        const data = await response.json()
        console.log("data:", data)
        setNote(data)
    }


    // Create a note
    const createNote = async () => {
        await fetch("http://127.0.0.1:8000/api/notes/create/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    // update a note
    const updateNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
            //body: JSON.stringify({...note, 'updated': new Date()})
        })
    }


    // conditional function to handle delete, update and create
    const handleSubmit = () => {
        if (id !== 'id' && !note.body) {
            deleteNote()
        } else if (id !== 'id') {
            updateNote()
        } else if (id === 'id' && note !== null) {
            createNote()
        }
        
    }


    const deleteNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            // body: JSON.stringify(note)
        })
    }


    


    // const note = notes.find(note => note.id === Number(id))
    // console.log("Props:", id)
  return (
    <div className='note'>
        <div className="note-header">
            <h3>
                <Link to="/">
                    <img src={ArrowLeft} alt="image" onClick={handleSubmit}/>
                </Link>
            </h3>
            {id !== 'id' ? (
                <Link to='/'>
                    <button onClick={deleteNote}>Delete</button>
                </Link>
            ) : (
                <Link to='/'>
                    <button onClick={handleSubmit}>Done</button>
                </Link>
            )}
            
        </div>
        <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage