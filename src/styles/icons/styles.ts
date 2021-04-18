import styled from 'styled-components'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export const GithubIcon = styled(SiGithub).attrs({
  size: 35
})`
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: #fff;
  }
`
export const LinkedinIcon = styled(SiLinkedin).attrs({
  size: 35
})`
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: #fff;
  }
`
