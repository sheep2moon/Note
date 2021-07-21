import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';

export const TaskListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TaskContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 1rem;
  margin: 2rem 1rem 2rem 1rem;
  background: ${(props) => props.theme.light};
  color: ${(props) => props.theme.dark};

  @media screen and (max-width: 480px) {
    max-width: 380px;
    height: 300px;
  }
`;

export const AddNewWrapper = styled.div`
  height: 60px;
  width: 320px;
  margin: 5rem auto 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.light};
`;

export const AddIcon = styled(BiPlus)`
  font-size: 4rem;
  margin-right: 2rem;
`;

export const AddText = styled.p`
  font-size: 1.6rem;
`;

export const AddFormWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const AddForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const AddTaskTitle = styled.input`
  border: none;
  margin: 1rem 2rem;
  padding: 1rem 0;
  background: none;
  outline: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.dark};
  border-bottom: 1px solid ${(props) => props.theme.dark};
`;

export const AddTaskButton = styled.button`
  padding: 0.5rem 2rem;
  background: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.light};
  border: none;
  position: absolute;
  right: 3rem;
  bottom: 1rem;
`;
