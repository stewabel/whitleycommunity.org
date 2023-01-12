import Head from 'next/head'
import Link from 'next/link'
import { View, Menu, MenuItem, Flex, Image } from '@aws-amplify/ui-react';
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
            
            <Flex
                direction="row"
                justifyContent="center">

                <menu className={styles.menu}>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about-us"><a>About Us</a></Link></li>
                    <li><Link href="/centre-hire"><a>Hire our Centre</a></Link></li>
                    <li><Link href='/contact'><a>Contact</a></Link></li>
                </menu>
            </Flex>
            {children}
            <Flex
                direction="row"
                justifyContent="center">
                    Supported By
            </Flex>
            <Flex
                direction="row"
                justifyContent="center">
                    <Image
                        src="/SE_TNL_Landscape_2021_RGB.png"
                        alt="National Lottery & Sport England"
                        layout="responsive"
                        maxHeight="100px"
                        />
            </Flex>
        </main>
        </div>
    </>
  )
}
