import styled from 'styled-components';

export const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: masonry;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  padding: 1rem;
  margin: 1rem auto;
`;

export const NoteTitleInput = styled.input`
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

export const NoteTextArea = styled.textarea`
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

export const NoteSaveBtn = styled.button`
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
