/* @flow */
import React, { Component, PropTypes } from 'react';
import { 
  View, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';

import styles from './styles'

import WriteBoxContainer from './WriteboxContainer';

export default class WriteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      behavior: 'padding'
    };
  }
  /*
   * Solve the issue with the keyboard that is floating above everything
   * https://github.com/facebook/react-native/issues/10765#issuecomment-259109962
   */
  onKeyboardChange(event) {
    if (!event) {
      this.setState({ bottom: 0 });
      return;
    }
    const { duration, easing, endCoordinates } = event;
    const height = this.relativeKeyboardHeight(endCoordinates);
    if (duration && easing) {
      LayoutAnimation.configureNext({
        duration: duration,
        update: {
          duration: duration,
          type: LayoutAnimation.Types[easing] || 'keyboard'
        }
      });
    }
    this.setState({ bottom: height });
  }
  onLayout(event) {
    this.frame = event.nativeEvent.layout;
  }

  /**
   * Render
   * @method render
   * @return {JSX}
   */
  render() {
    return (
      <KeyboardAvoidingView
        behavior={ this.state.behavior }
        style={ styles.contentLayout }
        {...Platform.select({
          ios: {},
          android: {
            onKeyboardChange: this.onKeyboardChange,
            onLayout: this.onLayout
          }
        })}
      >
        <ScrollView
          keyboardDismissMode={ 'interactive' }
        >
          { this.props.children }
        </ScrollView>
        <WriteBoxContainer { ...this.props } />
      </KeyboardAvoidingView>
    );
  }
}