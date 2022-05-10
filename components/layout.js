import Head from 'next/head'
import { View } from '@aws-amplify/ui-react';
import styles from '../styles/Home.module.css'

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
            <View
                as="div"
                ariaLabel="View example"
                backgroundColor="var(--amplify-colors-white)"
                padding="1rem"
                width="100%"
                >
                <h1 className={styles.title}>
                Whitley Community Association
                </h1>
            </View>
            {children}
        </main>
        </div>
    </>
  )
}
