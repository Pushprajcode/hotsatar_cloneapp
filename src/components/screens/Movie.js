import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../Home/header';
import AdsTv from '../Tv/AdsTv';
import Iplads from '../Movies/Iplads';
import Popmovies from '../Movies/Popmovies';
import Bing from '../Movies/Bing';
import Newond from '../Movies/Newond';
import Englishmov from '../Movies/Englishmov';

const Movie = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header navigation={navigation} />
      <ScrollView bounces={false}>
        <AdsTv />
        <Iplads />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.font}>{'Top Picks For You'}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('channels');
            }}>
            <Image source={require('../../assets/images/next.png')} />
          </TouchableOpacity>
        </View>
        <Bing />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.font}>{'Popular Movies'}</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/next.png')} />
          </TouchableOpacity>
        </View>
        <Popmovies />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.font}>{'New on Disney+ Hostar'}</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/next.png')} />
          </TouchableOpacity>
        </View>
        <Newond />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.font}>{'Multiplex Movies'}</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/next.png')} />
          </TouchableOpacity>
        </View>
        <Englishmov />
      </ScrollView>
    </View>
  );
};
export default Movie;
const styles = StyleSheet.create({
  font: {
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
