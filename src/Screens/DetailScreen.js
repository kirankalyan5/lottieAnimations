// @flow
import React, {Component} from 'react';
import {
  StyleSheet, ScrollView, Text, View,
} from 'react-native';

import LottieView from 'lottie-react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  lottieWrapper: { height: 300, width: 300 },
  title: {
    fontSize: 24,
    margin: 24
  }
});


class  DetailScreen extends Component<P, S> {
  static navigationOptions = {
    title: 'Details',
  };
  state = {  }
  render() {
    const item = this.props.navigation.getParam('item')
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.lottieWrapper}>
          <LottieView
            source={item.animation}
            autoPlay
            loop
          />
        </View>
      </View>
    );
  }
}

export default DetailScreen;
