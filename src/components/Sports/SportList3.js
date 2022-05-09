
import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const data = [
  {src: require('../../assets/images/punjab.jpg')},
  {
    src: require('../../assets/images/Rr.jpg'),
  },
  {
    src: require('../../assets/images/Lucknow.jpg'),
  },
  {
    src: require('../../assets/images/Hydrabad.jpg'),
  },
  {
    src: require('../../assets/images/Delhi.webp'),
  },
];

const Highlights = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={item.src} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  );
};
export default Highlights;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 4,
    marginTop: 15,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 7,
  },
});
