import Head from 'next/head'
import Image from 'next/image'
import { View, Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
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

      <Card
        ariaLabel="View example"
        backgroundColor="var(--amplify-colors-white)"
        padding="1rem"
        style={{  position: 'relative', width: '100vw'}}
        >
        <Image src="/centre-aerial-1.jpg"
               alt="Whitley Community Centre. An 1800s, Yorkshire stone built former school."
               layout="responsive"
               width="828"
               height="465"
               objectFit="fit"
        />
        
        </Card>
      </main>
    </div>
  )
}
