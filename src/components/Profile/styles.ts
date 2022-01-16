import NextImage from 'next/image'
import styled from 'styled-components'

export const ConstainerImage = styled.div`
  height: 200px;
  width: 200px;
  margin: 2rem;

  border: 4px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
`

export const Image = styled(NextImage)`
  border-radius: 50%;
`
