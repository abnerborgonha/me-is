import styled from 'styled-components'

interface IContainerProps {
  isVisable: boolean
}
export const Container = styled.div<IContainerProps>`
  display: ${({ isVisable }) => (isVisable ? 'flex' : 'none')};
  flex-direction: column;

  width: 50%;
  min-width: 800px;
  height: 90vh;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px ${({ theme }) => theme.colors.text} solid;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 900px) {
    height: 100vh;
    width: 100%;
  }
`

export const ContainerCloseButton = styled.div`
  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  padding: 1rem;

  position: absolute;
  top: 0;
`

export const CloseButton = styled.button`
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
