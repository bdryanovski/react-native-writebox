/* @flow */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  Platform
} from 'react-native';

import {
  LIGHT_GRAY_FONT_COLOR,
  GRAY_FONT_COLOR
} from './constants'

import styles from './styles'

const INPUT_MAX_HEIGHT = 60

export default class WriteBoxInput extends Component {
  static propTypes = {
    onHeightChanged: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    autoFocus: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    inputLimit: PropTypes.number
  }
  static defaultProps = {
    onHeightChanged: () => {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    autoFocus: false,
    value: '',
    placeholder: 'Type here ...',
    inputLimit: undefined
  }
  constructor(props) {
    super(props)
    this.state = {
      content: props.value || '',
      height: 0,
    }
    this._onContentSizeChange = this._onContentSizeChange.bind(this)
    this._onChange = this._onChange.bind(this)
  }
  componentWillReceiveProps(props) {
    if (props.autoFocus) {
      this._textInput.focus();
    }
    this.setState({ content: props.value });
  }
  _maxInputHeight(input) {
    return input >= INPUT_MAX_HEIGHT ? INPUT_MAX_HEIGHT : input
  }
  _onContentSizeChange(event) {
    let update = {
      height: this._maxInputHeight(event.nativeEvent.contentSize.height)
    }
    this.setState(update)
    this.props.onHeightChanged(update)
  }
  _onChange(event) {
    this.setState({
      content:  event.nativeEvent.text
    })
    if (Platform.OS === 'android') {
      this._onContentSizeChange(event)
    }
    if (this.props.onChange) {
      this.props.onChange({ value: event.nativeEvent.text });
    }
  }
  render() {
    let inputCounter
    let addFlex, addFlexSize
    /*
     * Add counter
     */
    if (this.props.inputLimit) {
      addFlex = {flexDirection: 'row', alignItems: 'flex-end' }
      addFlexSize = { flex: .9 }
      let remainder = this.props.inputLimit - this.state.content.length
      if (remainder < -99) {
        remainder = -99
      }
      const remainderColor = remainder > 5 ? GRAY_FONT_COLOR : 'red'
      inputCounter = (
        <Text style={
            [ styles.remainder, { color: remainderColor } ]
          }>
          { remainder }
        </Text>
      )
    }
    return (
      <View style={[ styles.content, addFlex ] }>
        <TextInput
          placeholder={ this.props.placeholder }
          placeholderTextColor={ LIGHT_GRAY_FONT_COLOR }
          autoFocus={ this.props.autoFocus }
          onFocus={ this.props.onFocus }
          onBlur={ this.props.onBlur }
          accessible={ true }
          accessibilityLabel={ this.props.placeholder }
          multiline={ true }
          returnKeyType="done"
          ref={(r) => { this._textInput = r; }}
          onContentSizeChange={ this._onContentSizeChange }
          disableFullscreenUI={ true }
          textBreakStrategy={ 'highQuality' }
          onChange={ this._onChange.bind(this) }
          underlineColorAndroid='transparent'
          enablesReturnKeyAutomatically={true}
          style={
            [
              styles.input,
              { height: this.state.height + 4},
              addFlexSize
            ]
          }
          value={ this.state.content }
          />
        { inputCounter }
      </View>
    )
  }
}