import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  margin-top: 100px;
  padding: 2rem;

  position: relative;

  p {
    font-size: 20px;
  }
  ul {
    text-align: center;
    list-style-type: none;

    margin-top: 50px;
  }
  li {
    font-size: 20px;
    line-height: 50px;
  }
`
