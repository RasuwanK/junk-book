import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export default function Home() {
  return (
    <>
      <Head>
        <title>The Junk Book</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <aside id="selector">
          <header>
            <h2>Table of content</h2>
          </header>
          <section>
            <form>
              <input type="date" />
            </form>
            <ul>
              <li></li>
            </ul>
          </section>
        </aside>
        <article>
          <header>
            <h2></h2>
          </header>
          <section></section>
        </article>
      </main>
    </>
  )
}