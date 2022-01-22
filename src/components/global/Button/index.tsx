import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }: ButtonProps) => {
  return <Container {...rest}>{label}</Container>
}

export default Button
