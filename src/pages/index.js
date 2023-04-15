import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>InstaClone</title>
        <meta name='description' content='Genereate Next App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </>
  )
}
