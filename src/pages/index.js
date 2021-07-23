import React, { useState } from 'react';
import ThemeSwitch from '../components/ThemeSwitch';
import { HomeContainer } from './HomeElements';

import NoteList from '../components/NoteList';

const Home = ({ setTheme }) => {
  return (
    <>
      <HomeContainer>
        <ThemeSwitch setTheme={setTheme} />
        <NoteList />
      </HomeContainer>
    </>
  );
};

export default Home;
