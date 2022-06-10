import Navbar from "../components/Navbar";
import Top from "../components/Top"

import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PlantShed.</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>

      <main className="main">
      <Navbar />
        {/* <Header title="PlantShed." /> */}
        <Top />
      </main>

      <footer className="footer">
        <a
          href="https://www.ayishaalli.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; PlantShed.com
        </a>
      </footer>
    </div>
  )
}
