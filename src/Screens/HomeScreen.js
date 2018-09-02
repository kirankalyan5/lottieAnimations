// @flow
import React, {Component} from 'react';
import {
  StyleSheet, ScrollView, Text, View,
} from 'react-native';

import AnimationList from '../components/AnimationList'

export default class HomeScreen extends Component<*, *>{
  static navigationOptions = {
    title: 'Animation List',
  };
  render() {
    return (
      <AnimationList onItemPress = {(item) => this.props.navigation.navigate('Detail', {item})}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
