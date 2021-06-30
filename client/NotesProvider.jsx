import React, {useState, createContext} from 'react'

export const NotesContext = createContext({});

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState([
    'New Note',
    'New Note',
    'New Note',
    'New Note',
    'New Note',
    'New Note'
  ]);
  const [selected, setSelected] = useState({
    first: false,
    second: false
  });

  return (
    <NotesContext.Provider value={{
      notes,
      selected,
      createNote: (text, index) => {
        if (text.length > 255) {
          console.log('Note can only be 255 characters long')
        } else {
          let newNote = [...notes];
          newNote[index] = text;
          setNotes(newNote);
        }
      },
      deleteNote: (index) => {
        let newNote = [...notes];
        newNote.splice(index, 1);
        setNotes(newNote);
      }
    }}>
      {children}
    </NotesContext.Provider>
  )
}