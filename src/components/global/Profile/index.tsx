import { ConstainerImage, Image } from './styles'

const Profile: React.FC = () => {
  return (
    <ConstainerImage>
      <Image
        alt="Image profile to Abnêr Borgonha"
        src="/profile.jpeg"
        height={40}
        width={40}
        layout="responsive"
        quality={60}
        placeholder="blur"
        blurDataURL="/profile.jpeg"
      />
    </ConstainerImage>
  )
}

export default Profile
