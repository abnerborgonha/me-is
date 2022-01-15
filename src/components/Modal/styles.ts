import styled from 'styled-components'

interface IContainerProps {
  isVisable: boolean
}
export const Container = styled.div<IContainerProps>`
  display: ${({ isVisable }) => (isVisable ? 'flex' : 'none')};
  flex-direction: column;

  height: 100vh;
  width: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px ${({ theme }) => theme.colors.text} solid;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 900px) {
    width: 100%;
  }
`
