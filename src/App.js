import React, {Component} from 'react'
import Home from './components/Home/Home'
import './App.less'

import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (<div className='App'>
      <Route path='/' component={Home} />
    </div>)
  }
}

export default App
