import React from 'react'
import Base64 from './components/Base64'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Save from './components/Save'
import log from './components/log'

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Base64} />
      <Route exact path='/save' component={Save} />
      <Route exact path='/history' component={log} />
    </div>
  )
}

export default App
