import React from 'react';
import {
  SwitchWrap,
  SwitchBtn,
  SwitchIcon,
  ThemeSwitchContainer,
  PaletteContainer,
  PaletteList,
  ListItem,
} from './ThemeSwitchElements';
import { themes } from '../../commons/Themes';
import { useState } from 'react';

const ThemeSwitch = ({ setTheme }) => {
  const [isPalette, setIsPalette] = useState(false);

  const togglePalette = () => {
    setIsPalette(!isPalette);
  };

  return (
    <ThemeSwitchContainer>
      <SwitchWrap>
        <SwitchBtn onClick={togglePalette}>
          <SwitchIcon />
        </SwitchBtn>
      </SwitchWrap>

      <PaletteContainer isPalette={isPalette}>
        <PaletteList>
          {themes.map((color, index) => (
            <ListItem
              key={color.light}
              color={color}
              onClick={() => {
                setTheme(themes[index]);
                togglePalette();
              }}
            />
          ))}
        </PaletteList>
      </PaletteContainer>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
