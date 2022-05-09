import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
// import Header from '../Home/header';
// import Ads from './Ads';
// import Movie from '../MovieList';

import Movie from '../screens/Movie';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <Movie />
      </ScrollView>
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#0f1110',
    flex: 1,
    backgroundColor: 'black',
  },
});
