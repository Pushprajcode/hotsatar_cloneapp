import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Popular = () => {
  const [data, setdata] = useState([]);
  // console.log('data')
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=c2915bc3f1552febf396eb2c316a1238',
      )
      .then(response => {
        console.log('response', response.data.results);
        setdata(response.data.results.slice(0, 6));
      })
      .catch(err => console.log('error', err));
  }, []);
  const renderItem = ({item}) => {
    console.log('item', item.poster_path);
    return (
      <View>
        <TouchableOpacity>
          <Image
            source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
            style={styles.image}
          />
          <Text>{item.id}</Text>
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
export default Popular;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 120,
    padding: 20,
    margin: 5,
    borderRadius: 7,
  },
});
