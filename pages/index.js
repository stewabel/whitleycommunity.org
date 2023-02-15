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


export default function Home() {
  const { tokens } = useTheme();
  return (
    <>
      <Head>
        <title>WCA</title>
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

            <Flex
              direction="row"
              alignItems="center"
              gap={tokens.space.xs}
              >
                <Heading level={5}>
                  AGM
                </Heading>
            </Flex>
            <Flex
              direction="row"
              alignItems="center"
              gap={tokens.space.xs}
              >
                <Text as="span">
                  The 2023 AGM will be held <br/>
                  <b>7pm, Monday 13th March 2023</b> <br/>
                  at the Community Centre

                    <ul>
                      <li>Chairman Report and progress since last AGM</li>
                      <li>Treasurers Report</li>
                      <li>Election Committee for 2023 - 2024</li>
                    </ul>

                    <p><b>REMEMBER…………</b></p>

                    <p>The Whitley Community Association BELONGS TO YOU!</p>
                    <p>The Whitley Community Centre BELONGS TO YOU!</p> 
                    <p>YOUR opinion and YOUR ideas matter and need to be heard for the benefit of OUR community</p>
                    <p>By standing together we can influence local government and the provision of local government services to the benefit of OUR community</p>
                </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  )
}
