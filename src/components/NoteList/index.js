import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Note from './Note';
import Masonry from 'react-masonry-css';
import '../../masonry.css';
import styled from 'styled-components';

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
    <NotesContainer>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
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
      </Masonry>
    </NotesContainer>
  );
};

export default NoteList;

const NotesContainer = styled.div`
  padding: 2em;
`;
const NoteContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.theme.light};
  position: relative;
  border-radius: 1rem;
`;

const NoteTitleInput = styled.input`
  padding: 0.5rem;

  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.dark};
  border-bottom: 1px solid ${(props) => props.theme.dark};

  &:focus {
    outline: none;
  }
`;

const NoteTextArea = styled.textarea`
  margin: 0.5rem 0 3rem 0;
  color: ${(props) => props.theme.dark};
  background: ${(props) => props.theme.light};
  border: none;
  resize: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const NoteSaveBtn = styled.button`
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.dark};
  border: none;
  color: ${(props) => props.theme.light};
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
  }
`;
