import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const TvShow = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=c2915bc3f1552febf396eb2c316a1238',
      )

      .then(response => {
        console.log(response.data.results);
        setdata(response.data.results.slice(12, 16));
      })
      .catch(err => {
        console.log('error', err);
      });
  }, []);
  const renderItem = ({item}) => {
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

  const seperator = () => {
    return <View style={styles.seperator} />;
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={seperator}
        horizontal
      />
    </View>
  );
};
export default TvShow;
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 120,
    padding: 20,
    borderRadius: 5,
  },
  seperator: {
    margin: 4,
  },
});
