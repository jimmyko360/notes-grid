import React, {useState, useContext, useEffect} from 'react';
import {NotesContext} from '../NotesProvider.jsx';

export const Note = ({text, index}) => {
  const [editing, setEditing] = useState(false);

  const {selected, createNote, deleteNote, selectNotes, swapNotes} = useContext(NotesContext);

  useEffect(()=>{
    swapNotes(selected[0], selected[1]);
  }, [selected])

  return (
    <div
      className='note'
      id={selected[0] === index ? 'selected' : 'unselected'}
    >
      <button
        onClick={()=>{setEditing(!editing)}}
      >
        ✏️
      </button>
      <button
        onClick={()=>{deleteNote(index)}}
      >
        ❌
      </button>
      {editing ?
        <form
          onSubmit={(event)=>{
            createNote(event.target[0].value, index);
            setEditing(false);
          }}
        >
          <textarea type='text' defaultValue={text} rows='5' cols='24'/>
          <input type='submit' value={'✔️'}/>
        </form>
      : <p className='main'
          onClick={()=>{
            selectNotes(index);
          }}
        >
          {text}
        </p>
      }
    </div>
  )
}