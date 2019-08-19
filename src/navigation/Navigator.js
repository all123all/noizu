import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from      '../screens/homeScreen/HomeScreen';
import AboutScreen from    '../screens/aboutScreen/AboutScreen';
import SettingScreen from   '../screens/settingScreen/SettingScreen';
import CatalogScreen from   '../screens/catalogScreen/CatalogScreen';
import MyLibraryScreen from '../screens/myLibrary/MyLibraryScreen';

const Tab = createBottomTabNavigator({
    Home:               {screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, activeTintColor}) => (
               <Icon name="home" size={19} color={tintColor} />
               )
        },},
    Catalog:            {screen: CatalogScreen,
        navigationOptions: {
            tabBarLabel: 'Catalog',
            tabBarIcon: ({tintColor, activeTintColor}) => (
               <Icon name="local-library" size={19} color={tintColor} />
               )
        },},
    MyLibrary:          {screen: MyLibraryScreen,
        navigationOptions: {
            tabBarLabel: 'My Library',
            tabBarIcon: ({tintColor, activeTintColor}) => (
               <Icon name="star" size={19} color={tintColor} />
               )
        },},
    Setting:            {screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({tintColor, activeTintColor}) => (
               <Icon name="settings" size={19} color={tintColor} />
               )
        },},
        AboutScreen:               {screen: AboutScreen,
        navigationOptions: {
            tabBarLabel: 'AboutScreen',
            tabBarIcon: ({tintColor, activeTintColor}) => (
                <Icon name="home" size={19} color={tintColor} />
                )
        },},
},{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    showIcon: true,
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: '#FEFEFE',
        inactiveTintColor: '#614B70',
        activeBackgroundColor: '#614B70',
        inactiveBackgroundColor: '#FEFEFE',
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFD',
    paddingTop: 24,
  },
});

export default createAppContainer(Tab);
