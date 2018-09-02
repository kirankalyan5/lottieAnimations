// @flow
import React, {Component} from 'react';
import {
  StyleSheet, ScrollView, Text, View,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'

export default createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
});