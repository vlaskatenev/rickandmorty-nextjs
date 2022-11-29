import type { NextPage } from 'next'
import Image from 'next/image'
import PageLayout from '../src/components/PageLayout/PageLayout'

const Home: NextPage = () => {
  return (
    <div>
      
      <PageLayout />

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

    </div>
  )
}

export default Home
