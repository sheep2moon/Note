import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { themes, GlobalStyles } from './commons/Themes';
import Home from './pages';

function App() {
  const [theme, setTheme] = useState(themes[1]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
