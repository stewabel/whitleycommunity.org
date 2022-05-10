import Image from 'next/image'
import { View, Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


export default function Home() {
  return (
    <>
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
