import React, {useContext} from 'react';
import {NotesProvider} from '../NotesProvider.jsx';
import {NotesContext} from '../NotesProvider.jsx';
import {NoteGrid} from './NoteGrid.jsx';
import {AddNote} from './AddNote';

export const App = () => {
  return (
    <NotesProvider>
      <AddNote/>
      <NoteGrid/>
    </NotesProvider>
  )
}