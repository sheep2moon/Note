import React from 'react';
import { AppButton, AppList, AppMenuContainer } from './AppMenuElements';

const AppMenu = ({ activeApp }) => {
  return (
    <>
      <AppMenuContainer>
        <AppList>
          <AppButton isActive={activeApp === 'task-manager' ? true : false}>
            Task Manager
          </AppButton>
          <AppButton>Notes</AppButton>
        </AppList>
      </AppMenuContainer>
    </>
  );
};

export default AppMenu;
