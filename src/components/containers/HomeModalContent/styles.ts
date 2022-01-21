import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  height: 100%;
  overflow-y: auto;

  p {
    font-size: 20px;
  }
  ul {
    text-align: center;
    list-style-type: none;

    margin: 50px 50px;
  }
  li {
    font-size: 20px;
    line-height: 50px;
  }

  @media (max-width: 900px) {
    justify-content: flex-start;

    p {
      text-align: center;
      margin: 0 20px;
    }
  }
`
