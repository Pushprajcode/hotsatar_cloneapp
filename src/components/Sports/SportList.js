import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const data = [
  {src: require('../../assets/images/cricket(1).jpg')},
  {
    src: require('../../assets/images/football.jpg'),
  },
  {
    src: require('../../assets/images/farmula.jpg'),
  },
  {
    src: require('../../assets/images/tennis.jpg'),
  },
  {
    src: require('../../assets/images/athelits.jpg'),
  },
];

const PopularSport = () => {
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
      <FlatList data={data} renderItem={renderItem} horizontal={true} />
    </View>
  );
};
export default PopularSport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 4,
    marginTop: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 7,
    margin: 0,
  },
});
