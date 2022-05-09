import React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
const data = [
  {
    src: require('../../assets/images/indu.jpg'),
  },
  {
    src: require('../../assets/images/mangal.jpg'),
  },
  {
    src: require('../../assets/images/maqbul.jpg'),
  },
  {
    src: require('../../assets/images/masan.jpg'),
  },
  {
    src: require('../../assets/images/moon.jpg'),
  },
  {
    src: require('../../assets/images/neeraja.jpg'),
  },
  {
    src: require('../../assets/images/panga.jpg'),
  },
  {
    src: require('../../assets/images/pink.jpg'),
  },
];
const Popmovies = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={{borderRadius: 5, height: 160, width: 120, margin: 7}}
            source={item.src}
          />
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
export default Popmovies;
