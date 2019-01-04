import React from 'react'
import { Route } from 'react-router-dom'
import Base64 from './components/Base64'
import Navbar from './components/navbar'
import Save from './components/Save'
import log from './components/log'
import about from './components/about'

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Base64} />
      <Route exact path='/save' component={Save} />
      <Route exact path='/history' component={log} />
      <Route exact path='/about' component={about} />
    </div>
  )
}

export default App
