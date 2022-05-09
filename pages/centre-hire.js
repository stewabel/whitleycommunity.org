import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whitley Community Association</title>
        <meta name="description" content="Whitley Community Association" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Whitley Community Centre
        </h1>
      </main>
    </div>
  )
}