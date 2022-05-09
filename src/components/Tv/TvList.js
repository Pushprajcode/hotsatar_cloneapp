import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


const data = [
  {src: require('../../assets/images/day.jpeg')},
  {src: require('../../assets/images/rista.jpg')},
  {src: require('../../assets/images/mahadev.jpg')},
  {src: require('../../assets/images/mahabhart.jpg')},
  {src: require('../../assets/images/hinter.jpeg')},
];
const TvList = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image style={styles.image} source={item.src} />
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
export default TvList;
const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 180,
    borderRadius: 7,
    marginTop: 5,
    margin: 5,
  },
});
