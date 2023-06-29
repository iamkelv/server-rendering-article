import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ time }) {
  return (
    <main
      className={`flex min-h-screen  items-center mx-0 my-auto p-24 ${inter.className}`}
    >
      <h1>Current Time</h1>
      <p>{time}</p>
    </main>
  )
}

export async function getStaticProps() {
  // Fetch the current time
  const currentTime = new Date().toLocaleString()

  return {
    props: {
      time: currentTime,
    },
    revalidate: 10, // Revalidate the page every 10 seconds
  }
}
