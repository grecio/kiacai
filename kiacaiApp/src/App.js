/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import List from './components/List';


const App = () => (
  <View style={styles.container}>
    <List/>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
