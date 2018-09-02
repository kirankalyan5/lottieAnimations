// @flow

import React, { Component, Fragment} from 'react';
import {
  StyleSheet, ScrollView, Text, View, FlatList,Image, TouchableHighlight
} from 'react-native';

import animations from '../lottie/animations'
import chevronRight from '../components/assets/chevronRight.png'


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  }
})
const listItem = (item, onItemPress) =>{
  console.log(item)
  return (
    <TouchableHighlight style={styles.item}
      onPress={()=>onItemPress(item)}
     underlayColor='#eaeaea'>
      <Fragment>
        <Text style={styles.name}>{item.name}</Text>
        <Image source={chevronRight} />
      </Fragment>
    </TouchableHighlight>
  )
}

const separator = () =>  <View style={styles.separator}/>

export default function AnimationList({onItemPress}) {
  return (
    <FlatList
      data={animations}
      ItemSeparatorComponent={separator}
      renderItem={({ item }) => listItem(item, onItemPress)}
      keyExtractor={item => item.name}
  />
  )
}