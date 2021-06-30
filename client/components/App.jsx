import React, {useContext} from 'react';
import {NotesProvider} from '../NotesProvider.jsx';
import {NotesContext} from '../NotesProvider.jsx';
import {NoteGrid} from './NoteGrid.jsx';

export const App = () => {
  return (
    <NotesProvider>
      <NoteGrid/>
    </NotesProvider>
  )
}