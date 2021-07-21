import React, { useState } from 'react';
import AppMenu from '../components/AppMenu';
import TaskList from '../components/TaskList';
import ThemeSwitch from '../components/ThemeSwitch';
import { HomeContainer } from './HomeElements';

const Home = ({ setTheme }) => {
  const [activeApp, setActiveApp] = useState('task-manager');

  return (
    <>
      <HomeContainer>
        <ThemeSwitch setTheme={setTheme} />
        <AppMenu activeApp={activeApp} setActiveApp={setActiveApp} />
        <TaskList />
      </HomeContainer>
    </>
  );
};

export default Home;
