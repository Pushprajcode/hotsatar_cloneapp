import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Movie from '../screens/Movie';
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <Movie navigation={navigation} />
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
