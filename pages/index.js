import Head from 'next/head'
import holyGrail from '../styles/HolyGrail.module.css'

export default function Home() {
  return (
    <div className={holyGrail.mainContainer}>
      <Head>
        <title>Holy Grail App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={holyGrail.header}>
        Header
      </header>

      <main className={holyGrail.main}>
      </main>

      <footer className={holyGrail.footer}>
        Footer
      </footer>
    </div>
  )
}
