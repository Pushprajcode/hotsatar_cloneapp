import React from 'react';
import {View, Text, FlatList, Image,TouchableOpacity} from 'react-native';
// import Popular from './popular';
// import Recomdes from './Home/Recomdes';
// import Newon from './Home/Newon';
// import Quixshows from './Home/Quickshows';

import Popular from '../MovieList/popular';
import Recomdes from '../Home/Recomdes';
import Newon from '../Home/Newon';
import Quixshows from '../Home/Quickshows';

const images = [
  {
    src: require('../../assets/images/RRR.jpeg'),
  },

  {
    src: require('../../assets/images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'),
  },
  {
    src: require('../../assets/images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'),
  },
];
const data = [
  {src: require('./src/assets/images/pink.jpg')},

  {
    src: require('../../assets/images/rudra.jpg'),
  },
  {
    src: require('../../assets/images/sundram.jpg'),
  },
  {src: require('./src/assets/images/atarangi.jpg')},
  {
    src: require('../../assets/images/world.jpg'),
  },
];
const MovieList = () => {
  const renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: 'black', padding: 4, marginTop: 15}}>
        <TouchableOpacity>
          <Image
            source={item.src}
            style={{
              width: 300,
              height: 180,
              // resizeMode:'contain',
              borderRadius: 7,
              margin: 3,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const render = ({item}) => {
    return (
      <View style={{backgroundColor: 'black', padding: 4, marginTop: 15}}>
        <TouchableOpacity>
          <Image
            source={item.src}
            style={{
              width: 125,
              height: 180,
              // resizeMode:'contain',
              borderRadius: 7,
              margin: 5,
              padding: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        horizontal={true}
        data={images}
        bounces={false}
        renderItem={renderItem}
      />
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {'Latest & Trending'}
        </Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={data}
          bounces={false}
          renderItem={render}
        />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 7,
          }}>
          {'Popular Shows'}
        </Text>
        <Popular />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 7,
          }}>
          {'Movies Recommended For You'}
        </Text>
        <Recomdes />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 7,
          }}>
          {'New On Disney+ Hotstar'}
        </Text>
        <Newon />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 7,
          }}>
          {'Multiplex Movies'}
        </Text>
        <Popular />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 4,
          }}>
          {'Popular Shows'}
        </Text>
        <Popular />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 4,
          }}>
          {'Quix Shows'}
        </Text>
        <Quixshows />
      </View>
    </View>
  );
};
export default MovieList;
