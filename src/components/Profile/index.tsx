import { ConstainerImage, Image } from './styles'

const Profile: React.FC = () => {
  return (
    <ConstainerImage>
      <Image src="/profile.jpeg" height={200} width={200} quality={60} />
    </ConstainerImage>
  )
}

export default Profile
