import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AdsTv from '../Tv/AdsTv';
import Header from '../Home/header';
import TvList from '../Tv/TvList';
import TvShow from '../Tv/TvList1';
import PopularShow from '../Tv/TvList2';
import SeeEqual from '../Tv/TvList3';
import StarShow from '../Tv/TvList4';
const Tv = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView bounces={false}>
        <AdsTv />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Top}>{'Top Picks For You'}</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Homeimages')
        }}>
        <Image source={require('../../assets/images/next.png')} />
        </TouchableOpacity>
        
        </View>
        <TvList />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.Popular}> {'Popular Shows'}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Homeimages');
            }}>
            <Image source={require('../../assets/images/next.png')} />
          </TouchableOpacity>
        </View>
        <TvShow />
        <Text style={styles.disney}>{'New on Disney+ Hotstar'}</Text>
        <PopularShow />
        <Text style={styles.Drama}>{'Popular in Drama'}</Text>
        <SeeEqual />
        <Text style={styles.action}>{'Popular in Action'}</Text>
        <StarShow />
      </ScrollView>
    </View>
  );
};

export default Tv;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f1110',
    backgroundColor: 'black',
    flex: 1,
  },
  Top: {
    color: 'white',
   // left: 2,
    fontSize: 22,
   // marginTop: 4,
    fontWeight: 'bold',
   // marginBottom: 4,
  },
  Popular: {
    color: 'white',
    left: 2,
     fontSize: 22,
    marginTop: 4,
     fontWeight: 'bold',
     marginBottom: 4,
  },
  disney: {
    color: 'white',
    left: 2,
    fontSize: 22,
    marginTop: 4,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  Drama: {
    color: 'white',
    left: 2,
    fontSize: 22,
    marginTop: 4,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  action: {
    color: 'white',
    left: 2,
    fontSize: 22,
    marginTop: 4,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
