import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('screen');
 //import SearchList from './SearchList';
// import Browse from './Browse';


import Browse from '../Searchscreen/Browse'
import SearchList from '../Searchscreen/SearchList'

export default function SearchScreen({onOff, setOnOff}) {
  return (
    <View style={{flex: 1, backgroundColor: 'black', }}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',height: height / 15,}}>
          <TouchableOpacity onPress={() => setOnOff(!onOff)}>
            <Image
              style={styles.image}
              source={require('../../assets/images/leftarrow.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.text}
            placeholder="Search"
            placeholderTextColor={'white'}
            autoFocus={true}
          />
          <Image
            style={{right: 10,}}
            source={require('../../assets/images/mic.png')}
          />
        </View>
      </View>
      <ScrollView
      bounces={false}
      >
        <Browse/>
        <SearchList/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: height / 25,
    height: height / 15,
    width: 370,
    left: 7,
    shadowColor: '#000',
    
   backgroundColor: '#121826',
    borderRadius: 2,
  },
  image:{
    height: 20,
     width: 20,
    left: 12
  },
  text: {
    position: 'absolute',
    left: 50,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlignVertical: 'center',
    width: width*7/10,
  },
});
