import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const SportAdsb = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../assets/images/sportads.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SportAdsb;

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: '98%',
    marginTop: 5,
    left: 2,
    borderRadius: 5,
    marginBottom: 5,
  },
});
