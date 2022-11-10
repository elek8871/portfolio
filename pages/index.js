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

      <main className="flex justify-center">
        <div className="font-serif">
          {/* <h1 className="text-teal-800 text-4xl font-semi-bold p-6 text-center" > Michelle Elek </h1> */}
          <div className="p-6 flex justify-center top-10">
          <Image
            className="rounded-lg"
            src ="/michelle2.png"
            alt ="logo for michelle elek"
            width={800}
            height={800}
          />
          </div>

          {/* <p className="p-4 text-center text-gray-600 font-light"> Michelle is a full-stack software engineer with a fondness of backend frameworks. </p> */}
        </div>
      </main>

     
    </div>
  )
}
