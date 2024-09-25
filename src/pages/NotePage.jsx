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

    const getNote = async () => {

       if (id === 'new') return
        const response = await fetch(`http://localhost:3000/notes/${id}`)
        const data = await response.json()
        console.log("data:", data)
        setNote(data)
    }

    const createNote = async () => {
        console.log("create note")
        await fetch(`http://localhost:3000/notes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date()})
        })
    }


    const updateNote = async () => {
        await fetch(`http://localhost:3000/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date()})
        })
    }

    const handleSubmit = () => {
        if (id !== 'new' && !note.body) {
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        } else if (id === 'new' && note !== null) {
            createNote()
        }
        
    }


    const deleteNote = async () => {
        await fetch(`http://localhost:3000/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
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
            {id !== 'new' ? (
                <button onClick={deleteNote}>Delete</button>
            ) : (
                <button onClick={createNote}>Done</button>
            )}
            
        </div>
        <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage