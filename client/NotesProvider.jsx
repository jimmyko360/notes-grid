import React, {useState, createContext} from 'react'

export const NotesContext = createContext({});

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState([]);
  const [selected, setSelected] = useState([]);

  return (
    <NotesContext.Provider value={{
      notes,
      selected,
      createNote: (text, index) => {
        if (notes.length === 36) {
          alert('You have reached the maximum amount of notes')
        } else if (text.length > 255) {
          alert('Note must have maximum length of 255 characters')
        } else if (text.length === 0) {
          alert('Please enter your note in the form provided')
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
      },
      selectNotes: (index) => {
        if (selected[0] === index) {
          let newSelected = [...selected];
          newSelected.pop();
          setSelected(newSelected);
        } else {
          let newSelected = [...selected];
          newSelected.push(index);
          setSelected(newSelected);
        }
      },
      swapNotes: (first, second) => {
        if (selected.length === 2) {
          let newNotes = [...notes];
          let firstNote = newNotes[first];
          newNotes[first] = newNotes[second];
          newNotes[second] = firstNote;
          setNotes(newNotes);
          setSelected([]);
        }
      }
    }}>
      {children}
    </NotesContext.Provider>
  )
}