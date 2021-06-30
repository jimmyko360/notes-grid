import React, {useState, createContext} from 'react'

export const NotesContext = createContext({});

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState(['note1', 'note2', 'note3']);
  const [selected, setSelected] = useState({
    first: false,
    second: false
  });

  return (
    <NotesContext.Provider value={{
      notes,
      selected
    }}>
      {children}
    </NotesContext.Provider>
  )
}