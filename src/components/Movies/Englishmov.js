import React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
const data = [
  {
    src: require('../../assets/images/cash.jpg'),
  },
  {
    src: require('../../assets/images/pyaar.jpg'),
  },
  {
    src: require('../../assets/images/daddy.jpg'),
  },
  {
    src: require('../../assets/images/sangram.jpg'),
  },
  {
    src: require('../../assets/images/south.jpg'),
  },
];
const Englishmov = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={{borderRadius: 5, height: 160, width: 150, margin: 7}}
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
export default Englishmov;
