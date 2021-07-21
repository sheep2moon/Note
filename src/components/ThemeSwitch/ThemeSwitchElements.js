import styled from 'styled-components';
import { MdColorLens } from 'react-icons/md';

export const ThemeSwitchContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    top: 1rem;
    left: 1rem;
  }
`;
export const SwitchWrap = styled.div`
  position: relative;
`;

export const SwitchBtn = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.light};
  box-shadow: 0 0 5px #000;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const SwitchIcon = styled(MdColorLens)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.dark};
`;

export const PaletteContainer = styled.div`
  display: flex;
  z-index: 10;
  padding: 0.25rem;
  margin-top: 0.5rem;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;
  transform: ${({ isPalette }) => (isPalette ? 'none' : 'translateX(-100px)')};
  opacity: ${({ isPalette }) => (isPalette ? '1' : '0')};
`;

export const PaletteList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.5rem 0;
  border: 2px solid #000;
  box-shadow: 0 0 5px #fff;
  border-radius: 50%;
  background: ${({ color }) =>
    `linear-gradient(135deg,${color.light} 0%,${color.light} 50%,${color.dark} 50%,${color.dark} 100%) `};
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
