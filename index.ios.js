'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class nativeRNintegration extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Native RN Integration
        </Text>
        <Text style={styles.subtitle}>
          Sample app to sample how to integrate RN into a native application.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  subtitle: {
    color: '#333333',
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('nativeRNintegration', () => nativeRNintegration);
