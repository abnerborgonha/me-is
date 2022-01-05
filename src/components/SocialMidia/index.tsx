import { GithubIcon, LinkedinIcon } from '../../styles/icons/styles'

import { Container } from './styles'

const SocialMidia: React.FC = () => {
  return (
    <Container>
      <a href="https://github.com/abnerborgonha" target="blank">
        <GithubIcon />
      </a>
      <a href="https://linkedin.com/in/abnerborgonha/" target="blank">
        <LinkedinIcon />
      </a>
    </Container>
  )
}

export default SocialMidia
