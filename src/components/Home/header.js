import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
//import SearchScreen from '../SearchScreen/SearchScreen';
//  import Modal from 'react-native-modal'
// import SearchScreen from '../Searchscreen/SearchScreen'
import SearchScreen from '../Searchscreen/SearchScreen';


const Header = ({navigation}) => {
  const [onOff, setOnOff] = useState(false);
  return (
    <SafeAreaView>
      <Modal
      visible={onOff}>
        <SearchScreen 
        setOnOff={setOnOff}
        onOff={onOff}/>
      
      </Modal>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={()=>navigation.openDrawer() }>
            <Image
              style={{height: 30, width: 30}}
              source={require('/Users/admin/Desktop/Hotstar/src/assets/images/ui.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
        <Image
          source={require('../../assets/images/disneylogo.png')}
          style={styles.logo}
        />
        </View>
       
       <View style={styles.subscribe}> 
        <TouchableOpacity>
          <Text style={styles.subscribetext}>{'SUBSCRIBE'}</Text>
        </TouchableOpacity></View>

        <View >
            <TouchableOpacity onPress = {() => {setOnOff(true)}}>
            <Image style={styles.search} source={require("../../assets/images/search.png")}/>
            </TouchableOpacity>
        </View>
       
      </View>
    </SafeAreaView>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
      padding:2,
    flexDirection: 'row',
    justifyContent:"space-around", 
    alignItems:'center'
  },
  logo:{
    height: 50, width: 170,bottom:5
  },
  subscribe:{
    backgroundColor:"#4072e6",height:25, padding:2, borderRadius:3, justifyContent:'center', right:15
  },
  subscribetext:{
    color: 'white',fontWeight:'bold',fontSize:11, 

  },
  search:{
    height:20,width:20,
  }
});
