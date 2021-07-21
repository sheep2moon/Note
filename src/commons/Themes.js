import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.dark};
        color: ${({ theme }) => theme.dark};
    }
`;

export const themes = [
  {
    dark: '#03051E',
    light: '#EAE7AF',
  },
  {
    dark: '#222831',
    light: '#EEEEEE',
  },
  {
    dark: '#242424',
    light: '#32E3C5',
  },
  {
    dark: '#1D2D50',
    light: '#FCDAB7',
  },
  {
    dark: '#301B3F',
    light: '#B4A5A5',
  },
  {
    dark: '#153B44',
    light: '#C6DE41',
  },
  {
    dark: '#000',
    light: '#fff',
  },
  {
    dark: '#fff',
    light: '#000',
  },
];
