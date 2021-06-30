import React, {useContext} from 'react';
import {NotesContext} from '../NotesProvider'

export const AddNote = () => {
  const {notes, createNote} = useContext(NotesContext);

  return (
    <div className='submission'>
      <p className='title'>
        nEverNote
      </p>
      <form
        onSubmit={(event)=>{
          event.preventDefault();
          createNote(event.target[0].value, notes.length);
          event.target[0].value = '';
        }}
      >
        <textarea placeholder={'Start by typing your note here!'} rows='4' cols='50'/>
        <input type='submit' value='Add New Note'/>
      </form>
    </div>
  )
}