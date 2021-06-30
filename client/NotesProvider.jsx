import React, {useState, createContext} from 'react'

export const NotesContext = createContext({});

export const NotesProvider = ({children}) => {
  let notesArray = [];
  for (let i = 0; i < 36; i++) {
    notesArray.push('New Note');
  }
  const [notes, setNotes] = useState(notesArray);
  const [selected, setSelected] = useState({
    first: false,
    second: false
  });

  return (
    <NotesContext.Provider value={{
      notes,
      selected,
      editNote: (text, index) => {
        let newNote = [...notes];
        newNote[index] = text;
        setNotes(newNote);
      },
      deleteNote: (index) => {
        let newNote = [...notes];
        newNote[index] = 'New Note';
        setNotes(newNote);
      }
    }}>
      {children}
    </NotesContext.Provider>
  )
}