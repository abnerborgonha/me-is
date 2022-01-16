import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ContainerTypewriter = styled.div`
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

  margin-top: 50px;

  @media (min-width: 900px) {
    min-width: 550px;
  }
`
export const ContainerSocielMidia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 50px;
  padding: 16px;
`
