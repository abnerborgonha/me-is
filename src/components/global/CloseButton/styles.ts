import styled from 'styled-components'
export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  padding: 20px;

  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;
`
