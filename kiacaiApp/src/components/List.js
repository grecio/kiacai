/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
      <View >
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </View>
    );
  }
}
