import Techs from './Techs'

import { Container } from './styles'

const HomeModalContent: React.FC = () => {
  return (
    <Container>
      <p>I&apos;m Abnêr Borgonha</p>
      <p>
        <strong>Computer Engineer</strong> and{' '}
        <strong>Software Developer</strong>
      </p>
      <ul>
        <li>🎓 I graduated from Rocketseat </li>
        <li>💻 I love writing code and learn anythings about it </li>
        <li>
          📚 I’m currently learning how to build clean and scalable softwares
          with <strong>Clean Architecture, DDD and TDD</strong>
        </li>
        <li>
          <a
            href="https://github.com/abnerborgonha/abnerborgonha/issues"
            title="Issues"
          >
            💬 Ask me about <strong>here</strong>
          </a>
        </li>
        <li>
          📫 How to reach me:
          <a href="mailto: abnerborgonha@gmail.com">
            <strong>abnerborgonha@gmail.com</strong>
          </a>
        </li>
      </ul>
      <p>
        <strong>Techs:</strong>
      </p>

      <Techs />
    </Container>
  )
}

export default HomeModalContent
