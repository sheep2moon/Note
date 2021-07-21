import React from 'react';
import { useState } from 'react';
import {
  TaskListContainer,
  TaskContainer,
  AddNewWrapper,
  AddIcon,
  AddText,
  AddFormWrapper,
  AddForm,
  AddTaskTitle,
  AddTaskButton,
} from './TaskListElements';

const TaskList = () => {
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleAddNewTask = () => {
    setIsAddingNew(true);
  };
  return (
    <>
      <TaskListContainer>
        <AddNewWrapper onClick={handleAddNewTask}>
          <AddIcon />
          <AddText>Add new project</AddText>
        </AddNewWrapper>

        {isAddingNew && (
          <TaskContainer>
            <AddFormWrapper>
              <AddForm>
                <AddTaskTitle
                  type='text'
                  placeholder='Name'
                  autoComplete='new-password'
                />

                <AddTaskButton>Add</AddTaskButton>
              </AddForm>
            </AddFormWrapper>
          </TaskContainer>
        )}
      </TaskListContainer>
    </>
  );
};

export default TaskList;
