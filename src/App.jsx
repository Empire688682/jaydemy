import React from 'react'
import { UseGlobalContext } from './Context'

const App = () => {
  const {hello} = UseGlobalContext();
  return (
    <div>
      <h1>{hello} World</h1>
    </div>
  )
}

export default App
