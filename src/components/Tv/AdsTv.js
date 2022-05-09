import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
const AdsTv = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../assets/images/ipl(1).jpeg')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 130,
    width: '98%',
    marginTop: 5,
    left: 2,
    borderRadius: 5,
  },
});

export default AdsTv;
