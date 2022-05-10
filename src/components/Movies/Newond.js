import React from 'react';
import {View, Image, FlatList, TouchableOpacity,StyleSheet} from 'react-native';
const data = [
  {
    src: require('../../assets/images/pixar.jpg'),
  },
  {
    src: require('../../assets/images/ecanto.jpg'),
  },
  {
    src: require('../../assets/images/bear.jpg'),
  },
  {
    src: require('../../assets/images/cash.jpg'),
  },
  {
    src: require('../../assets/images/pyaar.jpg'),
  },
  {
    src: require('../../assets/images/humdo.jpg'),
  },
  {
    src: require('../../assets/images/lasttep.jpg'),
  },
];
const Newond = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={styles.image}
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
export default Newond;
const styles=StyleSheet.create({
  image:{
    borderRadius: 5,
     height: 160,
      width: 150,
       margin: 7
  }

})
