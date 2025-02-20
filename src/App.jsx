import React from 'react'
import { UseGlobalContext } from './Context'

const App = () => {
  const {hello} = UseGlobalContext();
  return (
    <div>
        <h1 className="text-3xl font-bold underline ">
      Hello world!
    </h1>
    </div>
  )
}

export default App
