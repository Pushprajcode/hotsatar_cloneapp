import React from 'react';
import {Image} from 'react-native';
// import Home from '../screens/Home';
// import Tv from '../screens/Tv';
// import Sports from '../screens/Sports';
// import Movie from '../screens/Movie';

import Home from '../screens/Home';
import Tv from '../screens/Tv';
import Sports from '../screens/Sports';
import Movie from '../screens/Movie';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
        },
        tabBarLabelStyle: {
          fontFamily: 'Verdana-Italic',
        },
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/home(2).png')
                  : require('../../assets/images/home(2).png')
              }
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/livetv.png')
                  : require('../../assets/images/livetv.png')
              }
              style={{width: 26, height: 26}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Movie"
        component={Movie}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/video.png')
                  : require('../../assets/images/video.png')
              }
              style={{width: 25, height: 25}}
            />
          ),
          // tabBarLabelStyle
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/cricket.png')
                  : require('../../assets/images/cricket.png')
              }
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
