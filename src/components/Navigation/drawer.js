import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
// import Header from '../Home/header';
// import MyTabs from './Navigation';
import MyTabs from '../Navigation/Navigation';
import Header from '../Home/header';
const Drawer = createDrawerNavigator();
function DrawerNav() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  const DrawerList = () => {
    return (
      <SafeAreaView style={styles.login}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 30,
                width: 30,
                backgroundColor: 'white',
                top: 9,
                borderRadius: 20,
              }}
              source={require('../../assets/images/profile.png')}
            />
            <View style={{left: 9}}>
              <Text style={{color: 'white'}}>{'Log in '}</Text>
              <Text style={{color: 'grey'}}>{'For a better '}</Text>
              <Text style={{color: 'grey'}}>{'experience '}</Text>
            </View>
          </View>
          <View style={styles.kid}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#ffaa05'}}>{'KiDS Safe'}</Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={[{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}]}
            />
          </View>
          <View>
            <View style={styles.container}>
              <View style={{marginTop: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 22, width: 22}}
                    source={require('../../assets/images/download.png')}
                  />
                  <View style={styles.channels}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {'Channels'}
                    </Text>
                    <Text style={{color: 'grey'}}>
                      {'Watch videos offline'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 22, width: 22}}
                    source={require('../../assets/images/file(1).png')}
                  />
                  <View style={styles.channels}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {'Watchlist'}
                    </Text>
                    <Text style={{color: 'grey'}}>{'Save to watch later'}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 22, width: 22}}
                    source={require('../../assets/images/prize.png')}
                  />
                  <View style={styles.channels}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {'Prizes'}
                    </Text>
                    <Text style={{color: 'grey'}}>
                      {'Prizes you have Wons'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 22, width: 22}}
                    source={require('../../assets/images/add.png')}
                  />
                  <View style={styles.channels}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {'Channels'}
                    </Text>
                    <Text style={{color: 'grey'}}>
                      {'StarPlus, star jalsha and more'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/images/languages.png')}
                  />
                  <View style={styles.channels}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {'Languages'}
                    </Text>
                    <Text style={{color: 'grey'}}>
                      {'Hindi, English and more'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 22, width: 22}}
                    source={require('../../assets/images/genre.png')}
                  />
                  <View style={styles.channels}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      {'Genres'}
                    </Text>
                    <Text style={{color: 'grey'}}>
                      {'Romance,Drama and more'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}
      drawerContent={() => <DrawerList />}>
      <Drawer.Screen name={'TabNav'} component={MyTabs} />
      <Drawer.Screen name={'Header'} component={Header} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerbutton: {
    //flex: 1,
    //alignItems: "center",
    // justifyContent: "center",
    //  marginTop:50,
    // backgroundColor:"blue"
  },
  container: {
    borderRadius: 2,
    marginTop: 10,
    left: 9,
  },
  channels: {
    left: 19,
  },
  kid: {
    height: 60,
    width: 280,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    alignItems: 'center',
  },
});

export default DrawerNav;
