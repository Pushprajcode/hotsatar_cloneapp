import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
const Browse = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'grey'}}>{'Browse'}</Text>
      <View style={{marginTop: 20}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            style={{height: 22, width: 22}}
            source={require('../../assets/images/add.png')}
          />
          <View style={styles.channels}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              {'Channels'}
            </Text>
            <Text style={{color: 'grey'}}>
              {'StarPlus, star jalsha and more'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/images/languages.png')}
          />
          <View style={styles.channels}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              {'Languages'}
            </Text>
            <Text style={{color: 'grey'}}>{'Hindi, English and more'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            style={{height: 22, width: 22}}
            source={require('../../assets/images/genre.png')}
          />
          <View style={styles.channels}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              {'Genres'}
            </Text>
            <Text style={{color: 'grey'}}>{'Romance,Drama and more'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Browse;
const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    marginTop: 10,
    left: 9,
  },
  channels: {
    left: 19,
  },
});
