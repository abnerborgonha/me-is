import styled from 'styled-components'

export const ContainerHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  display: flex;
  justify-content: center;
  background: transparent;

  @media (min-width: 900px) {
    display: none;
  }
`

export const Logo = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;

  width: 100%;
  max-width: 1800px;

  > ul {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    list-style: none;

    li {
      margin: 5px;
      margin-right: 2px;
      cursor: pointer;

      font-size: 1rem;

      transition: transform 0.3s;
      :hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
      }
    }
  }
`
