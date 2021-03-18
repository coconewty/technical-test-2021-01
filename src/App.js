import React from 'react'
import { Srikethrough, TitleBox } from './styles'
import SimpleCaesarCipher from './SimpleCaesarCipher'

const App = () => (
  <div className="App">
    <header className="App-header">
      <TitleBox>
        <h1 className="App-title">
          Welcome to <Srikethrough>React</Srikethrough> Caesar Cipher
        </h1>
      </TitleBox>
    </header>
    <SimpleCaesarCipher />
  </div>
)

export default App
