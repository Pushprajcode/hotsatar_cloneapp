import React from 'react';
import {
    View,
    Image,
    FlatList,
    StyleSheet

}from 'react-native';
// import Header from '../Home/header';
import Header from '../Home/header'
const data=[
    {
      src:require('../../assets/images/asianet.jpg')
    },
    {
        src:require('../../assets/images/abcstudios.jpg')
      },
      {
        src:require('../../assets/images/foxlife.jpg')
      },
      {
        src:require('../../assets/images/selectpics.jpg')
      },
      {
        src:require('../../assets/images/showtime.jpg')
      },
      {
        src:require('../../assets/images/starbhart.jpg')
      },
      {
        src:require('../../assets/images/starhindi.jpg')
      },
      {
        src:require('../../assets/images/starmarathi.jpg')
      },
      {
        src:require('../../assets/images/starpravah.jpg')
      },
     
      {
        src:require('../../assets/images/starutsav.jpg')
      },
      {
        src:require('../../assets/images/starworld.jpg')
      },
]
const Channels=()=>{
    const renderItem=({item})=>{
        return(
            <View>
                <Image style={styles.image}
                source={item.src}/>
            </View>
        )
    }
       return(
    <View style={{flex:1,backgroundColor:'black'}}>
         <Header/>
        <FlatList data={data}
        renderItem={renderItem} 
        horizontal={false}
        numColumns={3}
        />
    </View>
       )
}
export default Channels;
const styles=StyleSheet.create({
  image:{
    height:150,
    width:180,
    margin:8,
    borderRadius:5,

  }

})

