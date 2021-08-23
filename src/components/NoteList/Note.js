import React from 'react';
import styled from 'styled-components';
import { AiTwotoneDelete } from 'react-icons/ai';

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

const NoteContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.theme.light};
  position: relative;
  border-radius: 1rem;
`;

const NoteTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.dark};
`;

const NoteText = styled.pre`
  color: ${(props) => props.theme.dark};
  background: ${(props) => props.theme.light};
  font-size: 1rem;
  word-wrap: break-word;
`;

const NoteDeleteBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${(props) => props.theme.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 5px ${(props) => props.theme.dark};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;
const DeleteIcon = styled(AiTwotoneDelete)`
  font-size: 2rem;
`;
