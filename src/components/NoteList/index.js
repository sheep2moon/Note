import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Note from './Note';
import { NoteContainer } from './NoteElements';
import {
  NotesContainer,
  NoteTitleInput,
  NoteTextArea,
  NoteSaveBtn,
} from './NoteListElements';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem('notes'));
    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    let title = '';
    if (!noteTitle) {
      title = 'Note';
    } else {
      title = noteTitle;
    }
    if (!noteText) {
      return;
    }
    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        title,
        text: noteText,
      },
    ]);
    setNoteTitle('');
    setNoteText('');
  };

  const handleDelete = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <>
      <NotesContainer>
        <NoteContainer>
          <NoteTitleInput
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
            type='text'
            placeholder='note name'
          />
          <NoteTextArea
            onChange={(e) => setNoteText(e.target.value)}
            rows='8'
            cols='10'
            value={noteText}
            placeholder='start typing here...'
          />
          <NoteSaveBtn onClick={handleAddNote}>Save</NoteSaveBtn>
        </NoteContainer>
        {notes.map((note) => (
          <Note
            id={note.id}
            noteTitle={note.title}
            noteText={note.text}
            handleDelete={handleDelete}
          />
        ))}
      </NotesContainer>
    </>
  );
};

export default NoteList;
