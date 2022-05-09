import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const data = [
  {src: require('../../assets/images/cyclic.jpg')},
  {src: require('../../assets/images/cotry.jpg')},
  {src: require('../../assets/images/swim.jpg')},
  {src: require('../../assets/images/rilly.jpg')},
];

const SportList = () => {
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
      <FlatList data={data} renderItem={renderItem} horizontal />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 170,
    width: 350,
    borderRadius: 7,
    margin: 6,
  },
});
export default SportList;
