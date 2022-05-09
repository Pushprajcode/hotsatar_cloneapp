import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const StarShow = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/popular?api_key=c2915bc3f1552febf396eb2c316a1238',
      )
      .then(response => {
        console.log('response', response.data.results);
        setdata(response.data.results.slice(11, 20));
      })
      .catch(err => console.log('error', err));
  }, []);
  const renderItem = ({item}) => {
    console.log('item', item.poster_path);
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          />
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
export default StarShow;
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 120,
    padding: 20,
    borderRadius: 5,
    margin: 5,
  },
});
