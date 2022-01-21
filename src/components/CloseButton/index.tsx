import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

export type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const CloseButton: React.FC<CloseButtonProps> = ({
  ...rest
}: CloseButtonProps) => {
  return <Container {...rest}>X</Container>
}

export default CloseButton
