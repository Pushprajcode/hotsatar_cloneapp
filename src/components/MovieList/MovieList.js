import React from 'react';
import {View, Text, FlatList, Image,TouchableOpacity,StyleSheet} from 'react-native';
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
      <View style={styles.container}>
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
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={item.src}
            style={styles.image}
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
          style={styles.txt}>
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
          style={styles.txt}>
          {'Popular Shows'}
        </Text>
        <Popular />
      </View>
      <View>
        <Text
          style={styles.txt}>
          {'Movies Recommended For You'}
        </Text>
        <Recomdes />
      </View>
      <View>
        <Text
          style={styles.txt}>
          {'New On Disney+ Hotstar'}
        </Text>
        <Newon />
      </View>
      <View>
        <Text
          style={styles.txt}>
          {'Multiplex Movies'}
        </Text>
        <Popular />
      </View>
      <View>
        <Text
          style={styles.txt}>
          {'Popular Shows'}
        </Text>
        <Popular />
      </View>
      <View>
        <Text
          style={styles.txt}>
          {'Quix Shows'}
        </Text>
        <Quixshows />
      </View>
    </View>
  );
};
export default MovieList;
const styles=StyleSheet.create(
  {
    container:{
      backgroundColor: 'black',
       padding: 4,
       marginTop: 15
    },
    txt:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
      
    },
    image:{
      
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
      
    }
    
  }
)


