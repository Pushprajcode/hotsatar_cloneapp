import React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
const data = [
  {
    src: require('../../assets/images/ajnabee.jpg'),
  },
  {
    src: require('../../assets/images/akira.jpg'),
  },
  {
    src: require('../../assets/images/apahran.jpg'),
  },
  {
    src: require('../../assets/images/atarangi.jpg'),
  },
  {
    src: require('../../assets/images/baby.jpg'),
  },
  {
    src: require('../../assets/images/badai.jpg'),
  },
  {
    src: require('../../assets/images/banglore.jpg'),
  },
  {
    src: require('../../assets/images/chichore.jpg'),
  },
];
const Bing = () => {
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
export default Bing;
