import TypewriterEffect from 'typewriter-effect'

const Typewriter: React.FC = () => {
  const TIME_OF_PAUSE = 1000
  return (
    <TypewriterEffect
      onInit={typewriter => {
        typewriter
          .typeString("<em>Hi, my name is Abnêr. I'm a</em> \n")
          .typeString('<em><strong>Software developer</strong></em>')
          .deleteChars(18)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<em><strong>Nerd</strong></em>')
          .deleteChars(4)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<em><strong>Dad</strong></em>')
          .deleteChars(4)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<s><strong>Batman</strong></s>')
          .deleteChars(6)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<em><strong>Software developer.</strong></em>')
          .start()
      }}
    />
  )
}

export default Typewriter
