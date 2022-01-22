import Head from 'next/head'
import Home from '../components/containers/Home'

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Me Is | Home</title>
      </Head>
      <Home />
    </>
  )
}
export default HomePage
