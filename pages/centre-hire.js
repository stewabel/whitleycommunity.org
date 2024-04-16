import Head from 'next/head'
import {
  Link,
  Card, 
  Flex,
  Heading,
  Text,
  Image,
  useTheme } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import styles from '../styles/Home.module.css'

export default function CentreHire() {
  const { tokens } = useTheme();
  return (
    <>
      <Head>
        <title>WCA - Hiring our Centre</title>
        <meta name="description" content="WCA - Hiring our Centre" />
      </Head>

      <Card
        ariaLabel="View example"
        backgroundColor="var(--amplify-colors-white)"
        padding="1rem"
        style={{  position: 'relative', width: '100vw'}}
        >
        <Flex direction="row" alignItems="flex-start">
            <Image src="/centre-aerial-1.jpg"
                  alt="Whitley Community Centre. An 1800s, Yorkshire stone built former school."
                  width="33%"
            />
          <Flex
            direction="column"
            alignItems="flex-start"
            gap={tokens.space.xs}
          >
            <Heading level={5}>
              Hiring Our Centre
            </Heading>

            <Text as="span">
              <p>
                Our beautiful community centre is available for hire. We offer a large hall, 
                kitchen facilities and a licenesed bar.<br />
                Special rates are offered to charities, and discounts for block bookings.<br />
                Please <Link href="/contact">get in touch</Link> to discuss your requirements.
              </p>
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  )
}