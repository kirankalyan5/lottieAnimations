import React from 'react';
import { StyleSheet, ScrollView,Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import waiting from './src/lottie/dog.json'
import cycling from './src/lottie/cycle_animation.json'
import favourite from './src/lottie/favourite.json'
import heart from './src/lottie/heart.json'
import like from './src/lottie/like.json'



export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <Text>Lottie example</Text>
          <View style={styles.lottieWrapper}>
          <LottieView
              source={waiting}
              autoPlay
              loop
            />
          </View>
          <View style={styles.row}>
            <View style={styles.lottie}>
              <LottieView
                source={favourite}
                autoPlay
                loop
              />
            </View>
            <View style={styles.lottie}>
              <LottieView
                source={heart}
                autoPlay
                loop
              />
            </View>
            <View style={styles.lottie}>
              <LottieView
                source={like}
                autoPlay
                loop
              />
            </View>
          </View>
          <View style={styles.lottieWrapper}>
            <LottieView
              source={cycling}
              autoPlay
              loop
            />
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    backgroundColor: '#fff',
    justifyContent: 'center', alignItems: 'center'
  },
  lottieWrapper: {height: 300, width: 300},
  lottie: {height: 120, width: 120},
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});
