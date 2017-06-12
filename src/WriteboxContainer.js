/* @flow */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Alert
} from 'react-native';

import WriteBoxInput from './WriteboxInput'

/* Setup */
import {
  COLOR_SECONDARY,
  LIGHT_FONT_COLOR,
  GRAY_FONT_COLOR,
} from './constants'

const WRITEBOX_MIN_HEIGHT = 60
const MAGICAL_NUMBER = 30
const INPUT_HEIGHT = 32

export default class WriteBoxContainer extends Component {

  static propTypes = {
    leftComponent: PropTypes.func,
    onSubmit: PropTypes.func,
    submitLabel: PropTypes.string,
    autoFocus: PropTypes.bool,
    clearOnSubmit: PropTypes.bool,
    value: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  }

  static defaultProps = {
    leftComponent: () =>  <View />,
    onSubmit: () => { console.warn('WriteBox onSubmit is not implemented') },
    submitLabel: 'Post',
    autoFocus: false,
    clearOnSubmit: false,
    value: undefined,
    onFocus: () => {},
    onBlur: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      inputHeight: INPUT_HEIGHT,
      value: props.value,
      buttonText: props.submitLabel,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ 
      value: props.value,
    })
  }

  /**
   * When input field change track it and apply this to the internal state.
   * We need this to animate or change some of the other components that are
   * attached and need to know what is the state of the input
   *
   * @method _onChange
   * @param  {object}  value
   * @return {undefined}
   */
  _onChange({ value }) {
    this.setState({ value })
  }
  /**
   * Set active color when there is user input
   * @method _makeButtonActive
   * @return {object}
   */
  _makeButtonActive() {
    let style = { color: GRAY_FONT_COLOR } 
    if (this.state.value && this.state.value.length > 1) {
        style = { color: LIGHT_FONT_COLOR }
    }
    return style;
  }
  /**
   * On pressing the submit button this is the callback for it :)
   *
   * @method _postAction
   * @return {undefined}
   */
  _postAction() {
    // don't submit empty data
    if (!this.state.value || this.state.value.length < 2) {
      return
    }
    
    this.props.onSubmit({ value: this.state.value })

    Keyboard.dismiss();
    
    if (this.props.clearOnSubmit) {
      this.setState({ value: undefined })
    }  
  }
 
  render() {

    const totalHeight = this.state.inputHeight + MAGICAL_NUMBER; 

    return (
      <View style={[ styles.writeBoxContainer, { height: totalHeight }]}>
        { /* Write box with submit button and more */}
        <View style={ styles.writeContainer }>
          { /* Left button holder */}
          <View style={styles.leftBtn }>
            { this.props.leftComponent() }
          </View>
          { /* Input field */}
          <View style={ styles.inputContent }>
            <WriteBoxInput
              placeholder={ this.props.placeholder }
              inputLimit={ this.props.inputLimit }
              autoFocus={ this.props.autoFocus }
              onFocus={ this.props.onFocus }
              onBlur= {this.props.onBlur }
              value={ this.state.value }
              onHeightChanged={({ height }) => {
                this.setState({ inputHeight: height })
              }}
              onChange={(event) => {
                this._onChange(event)
              }}
              />
          </View>
          { /* Submit action */}
          <View style={ styles.rightBtn }>
            <Text
              accessible={ true }
              accessibilityLabel={ this.props.submitLabel }
              style={[ styles.submitButton, this._makeButtonActive() ]}
              onPress={ this._postAction.bind(this) }
              >{ this.state.buttonText }</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  writeBoxContainer: {
    height: WRITEBOX_MIN_HEIGHT,
    backgroundColor: COLOR_SECONDARY,
  },
  writeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
  },
  leftBtn: {
    margin: 5
  },
  inputContent: {
    flex: 1
  },
  rightBtn: {
    padding: 4
  },
  submitButton: {
    fontSize: 15,
    marginBottom: 10,
    margin: 5
  }
});