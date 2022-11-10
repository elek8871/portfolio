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

      <main >
          <div className="flex justify-center p-20">
            <Image
              className="rounded-full"
              src ="/logo2.png"
              alt ="logo for michelle elek"
              width={600}
              height={600}
            />
          </div>
      </main>

     
    </div>
  )
}
