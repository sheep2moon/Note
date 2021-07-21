import styled from 'styled-components';

export const AppMenuContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const AppList = styled.div`
  display: flex;
  margin: 1rem auto;
`;

export const AppButton = styled.button`
  padding: 0.6rem 1.2rem;
  margin: 0 0.5rem;
  font-weight: 700;
  border: none;
  font-size: 1rem;
  box-shadow: ${({ isActive, theme }) =>
    isActive ? `0 2px 0 ${theme.light}` : 'none'};
  color: ${(props) => props.theme.light};
  background: ${(props) => props.theme.dark};
`;
