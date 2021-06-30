import React, {useContext} from 'react';
import {NotesContext} from '../NotesProvider'

export const AddNote = () => {
  const {notes, editNote} = useContext(NotesContext);

  return (
    <div className='submission'>
      <form
        onSubmit={(event)=>{
          event.preventDefault();
          editNote(event.target[0].value, notes.length);
        }}
      >
        <textarea rows="4" cols="50"/>
        <input type='submit' value='Add New Note'/>
      </form>
    </div>
  )
}