import React, {useEffect, useState} from 'react'
// import notes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButtion from '../components/AddButtion'

const NotesListPage = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = async () => {
        // const response = await fetch("http://localhost:3000/notes") // this is for the json-server api in the package.json
        const response = await fetch("http://127.0.0.1:8000/api/notes/") // this is coming from django api
        const data = await response.json()
        console.log(data)
        setNotes(data)
    }


  return (
    <div className='notes'>
        <div className="notes-header">
            <h2 className="notes-title">&#9782; Notes</h2>
            <p  className='notes-count'>{notes.length}</p>
        </div>
        <div className="note-list">
            {notes.map((note, index) => (
                <ListItem key={index} note={note}/>
            ))}
        </div>
        <AddButtion />
    </div>
  )
}

export default NotesListPage