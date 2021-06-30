import React, {useState, useContext} from 'react';
import {NotesContext} from '../NotesProvider.jsx';

export const Note = ({text, index}) => {
  const [editing, setEditing] = useState(false);

  const {editNote, deleteNote} = useContext(NotesContext);

  return (
    <div>
      <button
        onClick={()=>{setEditing(!editing)}}
      >
        {text === 'New Note' ? 'Create Note' : 'Edit Note'}
      </button>
      <button
        onClick={()=>{deleteNote(index)}}
      >
        X
      </button>
      {editing ?
        <form
          onSubmit={(event)=>{
            editNote(event.target[0].value, index);
            setEditing(false);
          }}
        >
          <input type='text' defaultValue={text}/>
          <input type='submit' value={'Done'}/>
        </form>
      : text}
    </div>
  )
}