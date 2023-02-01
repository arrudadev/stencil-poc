import { useState } from 'react'

import styles from '@/styles/Home.module.css'

import { MyComponent, MyHeading, MyInput, MyText } from '@stencil-ui/react'
import { MyInputCustomEvent } from '@stencil-ui/stencil'

type Props = {
  time: string
}

export default function Home({ time }: Props) {
  const [name, setName] = useState('')

  function handleChangeName({ detail: value }: MyInputCustomEvent<string>) {
    setName(value)
  }

  return (
    <>
      <main className={styles.app}>
        <MyHeading>Nextjs + Web components</MyHeading>

        <MyText>Type your name:</MyText>

        <MyInput placeholder='Type...' onChangeInput={handleChangeName} />

        <div className={styles['space-top']}>
          <MyComponent name={name} />
        </div>

        <MyText>Time (Test SSR)</MyText>

        <MyText>{time}</MyText>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().getTime()
    }
  }
}
