import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 14px;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin: 0 25px;

  border: 1px ${({ theme }) => theme.colors.text} solid;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.text};
  }
`
