import NextImage from 'next/image'
import styled from 'styled-components'

export const ConstainerImage = styled.div`
  margin: 2rem;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.text};
`

export const Image = styled(NextImage)`
  border-radius: 50%;
`
