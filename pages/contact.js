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
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.564268392122!2d-1.6659211840707868!3d53.65474118004486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bdf4483ccce67%3A0x320747c125da2961!2sWhitley%20Community%20Centre!5e0!3m2!1sen!2suk!4v1652204140486!5m2!1sen!2suk"
            width="50%"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
            
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
                Whitley Community Association,<br />
                Whitley Community Centre,<br />
                Howroyd Lane,<br />
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