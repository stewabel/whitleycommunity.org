import Head from 'next/head'
import Image from 'next/image'
import { View, Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import styles from '../styles/Home.module.css'

export default function CentreHire() {
  return (
    <>
      <Head>
        <title>WCA - Hiring our Centre</title>
        <meta name="description" content="WCA - Hiring our Centre" />
      </Head>
      <View
        as="div"
        ariaLabel="View example"
        backgroundColor="var(--amplify-colors-white)"
        padding="1rem"
        width="100%"
        >
        <h1 className={styles.title}>
          WCA - Hiring our Community Centre
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
    </>
  )
}