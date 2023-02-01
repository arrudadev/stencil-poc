import { useState } from 'react'

import './App.css'

import { MyInputCustomEvent } from '@stencil-ui/stencil'
import { MyComponent, MyHeading, MyInput, MyText } from '@stencil-ui/react'

function App() {
  const [name, setName] = useState('')

  function handleChangeName({ detail: value }: MyInputCustomEvent<string>) {
    setName(value)
  }

  return (
    <div className="App">
      <MyHeading>Vite + React + Web components</MyHeading>

      <MyText>Type your name:</MyText>

      <MyInput placeholder='Type...' onChangeInput={handleChangeName} />

      { name && <MyComponent name={name} /> }
    </div>
  )
}

export default App
