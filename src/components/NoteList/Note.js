import React from 'react';
import {
  NoteContainer,
  NoteText,
  NoteTitle,
  NoteDeleteBtn,
  DeleteIcon,
} from './NoteElements';

const Note = ({ noteTitle, noteText, handleDelete, id }) => {
  return (
    <NoteContainer>
      <NoteTitle>{noteTitle}</NoteTitle>
      <NoteText>{noteText}</NoteText>
      <NoteDeleteBtn onClick={() => handleDelete(id)}>
        <DeleteIcon />
      </NoteDeleteBtn>
    </NoteContainer>
  );
};

export default Note;
