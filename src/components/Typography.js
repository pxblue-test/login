// shared/Typography.js
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Colors from '@pxblue/colors';

export default class Typography extends Component {
  render() {
    return (
      <Text {...this.props} style={[styles.appText, this.props.style]}>{this.props.children}</Text>
    )
  }
}
const styles = StyleSheet.create({
  appText: {
    color: Colors.black['500'],
    fontSize: 16
  },
});