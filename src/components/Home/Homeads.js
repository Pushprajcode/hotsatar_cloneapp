import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Homeads = () => {
    
  return (
    <View style={{backgroundColor:'black'}}>
    <Image  style={{height:130,width:'98%',marginTop:5,left:2,borderRadius:5}}
    source={require('../../assets/images/ipl(1).jpeg')}/>
    </View>
  )
}

export default Homeads;

const styles = StyleSheet.create({})