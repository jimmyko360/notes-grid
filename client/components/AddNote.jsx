import React, {useContext} from 'react';
import {NotesContext} from '../NotesProvider'

export const AddNote = () => {
  const {notes, createNote} = useContext(NotesContext);

  return (
    <div className='submission'>
      <form
        onSubmit={(event)=>{
          event.preventDefault();
          createNote(event.target[0].value, notes.length);
        }}
      >
        <textarea rows="4" cols="50"/>
        <input type='submit' value='Add New Note'/>
      </form>
    </div>
  )
}