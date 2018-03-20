/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { SegmentedControls } from 'react-native-radio-buttons'
import Welcome from './src/welcome'
import BurgerMenu from './src/burgerMenu'

const startupArray = []

export default class App extends Component {

  constructor (props) {
    super(props)
    startupArray.push('constructor')
  }

  render () {
    startupArray.push('render')
    return (
      <View style={styles.container}>
        <Welcome name='Frank' />
        <SegmentedControls
          options={ ['Good', 'Bad'] }
        />
        <BurgerMenu />
      </View>
    )
  }

  componentWillMount () {
    startupArray.push('componentWillMount')
  }

  componentDidMount () {
    startupArray.push('componentDidMount')
    // alert(startupArray)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

