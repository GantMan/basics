/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Welcome from './src/welcome'

const startupArray = []

export default class App extends Component {

  constructor (props) {
    super(props)
    startupArray.push('constructor')
  }

  render () {
    startupArray.push('render')
    return (
      <Welcome />
    )
  }

  componentWillMount () {
    startupArray.push('componentWillMount')
  }

  componentDidMount () {
    startupArray.push('componentDidMount')
    alert(startupArray)
  }
}
