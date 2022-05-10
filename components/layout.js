import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Whitley Community Association</title>
            <meta name="description" content="Whitley Community Association" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
        <main>
            {children}
        </main>
        </div>
    </>
  )
}
