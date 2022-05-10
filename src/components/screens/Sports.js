import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import SportList from '../Sports/SportList1';
import PopularSport from '../Sports/SportList2';
import Highlights from '../Sports/SportList3';
import Header from '../Home/header';
import SportAdsb from '../Sports/SportAdsb';

const Sports = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView>
        <SportAdsb />
        <SportList />
        <View style={styles.rightarrow}>
          <Text style={styles.popular}>{'Popular Sports'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.arrow}
              source={require('../../assets/images/next.png')}
            />
          </TouchableOpacity>
        </View>
        <PopularSport />
        <View style={styles.rightarrow}>
          <Text style={styles.popular}>{'Highlights'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Homeimages')}>
            <Image
              style={styles.arrow}
              source={require('../../assets/images/next.png')}
            />
          </TouchableOpacity>
        </View>
        <Highlights />
      </ScrollView>
    </View>
  );
};
export default Sports;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  popular: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  rightarrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
