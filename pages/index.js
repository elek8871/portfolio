import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='text-teal-700'>
      <Head>
        <title> Michelle Elek </title>
        <meta name="description" />
      </Head>

    {/* // USE REF TO a=ADD SCROLL FUNCTION FOR ONE BIG PAGE */}

      <main>
        <div>
          <h1 className='text-teal-800 text-4xl font-semi-bold p-4' > Michelle Elek </h1>
          <p className='p-4'> Michelle is a full-stack software engineer with a fondness of backend frameworks. </p>
        </div>
      </main>

     
    </div>
  )
}
