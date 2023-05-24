import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";

import FormMain from "../components/Form/FormMain.jsx"

const inter = Inter({ subsets: ['latin'] })
const title = "ReftX-Challenge"

export default function Home() {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600">
          {/* Form */}
          <div className='w-lg h-lg bg-white rounded-xl px-8 py-6'>
            <FormMain/>
          </div>
        </div>
      </main>
    </>
  )
}
