import React, {useContext} from 'react';
import {NotesContext} from '../NotesProvider.jsx';
import {Note} from './Note.jsx';

export const NoteGrid = () => {
  const {notes} = useContext(NotesContext);

  return (
    <div className='notegrid'>
      {notes.map((text, index) => (
        <Note
          text={text}
          index={index}
        />)
      )}
    </div>
  )
}