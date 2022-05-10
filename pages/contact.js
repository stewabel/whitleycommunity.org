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
        <title>WCA - Contact</title>
        <meta name="description" content="WCA - Contact" />
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
              Contact
            </Heading>


            <Text as="span">
            <address>
                <p>
                Howroyd Ln,<br />
                Whitley Lower,<br />
                Dewsbury <br />
                WF12 0NB
                </p>
                <a href="tel:+447717876017">07717 876017</a>
            </address>
            
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  )
}