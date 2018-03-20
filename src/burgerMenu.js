import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

const burgerOptions = [
  'cheese 🧀',
  'tomato 🍅',
  'pickles 🥒',
  'Bacon 🥓',
  'fried egg 🍳',
  'surprise 🌟'
]

export default class Menu extends Component {
  static defaultProps = {
    options: burgerOptions
  }

  constructor (props) {
    super(props)
    this.state = {
      options: props.options.map((v, i) => ({value: v, active: false}))
    }
    console.log(this.state)
  }

  componentWillReceiveProps = (props) => {
    // alert('componentWillReceiveProps')
    // this.setState({
    //   options: props.options.map((v, i) => ({value: v, active: false}))
    // })

    // this.setState({
    //   options: props.options.map((v, i) => ({value: v, active: false}))
    // }, () => alert('I set it!'))

    this.setState((state, props) => ({
        options: props.options.map((v, i) => ({value: v, active: false}))
      })
    )
  }

  componentWillUpdate = () => {
    // alert('componentWillUpdate')
  }

  componentDidUpdate = () => {
    // alert('componentDidUpdate')
  }

  shouldComponentUpdate = () => true

  onToggle = (index) => {
    this.setState((state, props) => {
      let options = state.options
      options[index].active = !options[index].active
      return { options }
    })
  }

  renderOptions = () => {
    return this.state.options.map((option, index) => {
      let containerAdjustments = {}
      const highlighted = {
        backgroundColor: 'rgba(200, 2, 200, 0.5)'
      }
      if (this.state.options[index].active) containerAdjustments = highlighted
      return (
        <TouchableOpacity style={[styles.item, containerAdjustments]} key={index}
          onPress={this.onToggle.bind(this, index)}
        >
          <Text style={styles.itemText}>{option.value}</Text>
        </TouchableOpacity>
      )
    }
    )
  }

  render () {
    return (
      <View style={styles.menu}>
        {this.renderOptions()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    width: '50%'
  },
  itemText: {
    textAlign: 'center'
  },
  menu: {
    backgroundColor: 'rgba(55, 255, 255, 0.5)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    borderRadius: 4,
    borderColor: 'yellow',
    borderWidth: 2
  }
})
