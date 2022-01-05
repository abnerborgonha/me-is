import TypewriterEffect from 'typewriter-effect'

const Typewriter: React.FC = () => {
  const TIME_OF_PAUSE = 1000
  return (
    <TypewriterEffect
      onInit={typewriter => {
        typewriter
          .typeString("<a>Hi, my name is Abnêr. I'm a</a> \n")
          .typeString('<a><strong>Software developer</strong></a>')
          .deleteChars(18)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<a><strong>Co-founder of Deeplin</strong></a>')
          .deleteChars(21)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<a><strong>Nerd</strong></a>')
          .deleteChars(4)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<a><strong>Dad</strong></a>')
          .deleteChars(4)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<s><strong>Batman</strong></s>')
          .deleteChars(6)
          .pauseFor(TIME_OF_PAUSE)
          .typeString('<a><strong>Software developer.</strong></a>')
          .start()
      }}
    />
  )
}

export default Typewriter
