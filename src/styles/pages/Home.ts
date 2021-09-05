import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px;

  a,
  s {
    color: ${props => props.theme.colors.text};
    font: 300 22px Fira Code, sans-serif;
    font-weight: lighter;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  min-width: 550px;
  margin-top: 50px;
`
