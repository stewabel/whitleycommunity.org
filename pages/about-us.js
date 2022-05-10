import Head from 'next/head'
import {
  View,
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
        <title>WCA - About Us</title>
        <meta name="description" content="WCA - About Us" />
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
              About Us
            </Heading>

            <Text as="span">
            <p>Whitley Community Centre is a beautiful former school in the village of Whitley Lower, just between Mirfield and Dewsbury.</p>
            <p>The Centre is run by a group of dedicated volunteers and is a registered charity. All funds raised go back to preserving the building for future generations and supporting our local community.</p>
            <p>The Centre is available for hire and runs events for the community on a regular basis.</p>
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  )
}