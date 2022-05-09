import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Ads = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../assets/images/ipl.jpeg')}
      />
    </View>
  );
};

export default Ads;

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: '98%',
    marginTop: 5,
    left: 2,
    borderRadius: 5,
  },
});
