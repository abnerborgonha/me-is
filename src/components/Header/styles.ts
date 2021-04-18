import styled from 'styled-components'

interface IMenuProps {
  open: boolean
}

export const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 14px;
  z-index: 10;
`

export const Menu = styled.div<IMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ListMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30vh;

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    font-style: Fira Code;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 900px) {
      text-align: center;
    }

    &:hover {
      transition: transform 0.3s;
      transform: translateY(-2px);
      color: #fff;
    }
  }
`

export const SocialMidia = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
