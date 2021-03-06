import styled from 'styled-components'

interface IContainerProps {
  isVisable: boolean
}
export const Container = styled.div<IContainerProps>`
  display: ${({ isVisable }) => (isVisable ? 'flex' : 'none')};
  flex-direction: column;

  position: absolute;
  height: 100vh;
  width: 100%;

  border: 1px ${({ theme }) => theme.colors.text} solid;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: 900px) {
    width: 50%;
    height: 90vh;
    min-width: 800px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const ContainerCloseButton = styled.div`
  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  padding: 1rem;
`
