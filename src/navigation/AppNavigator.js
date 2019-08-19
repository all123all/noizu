import React                     from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createNavigationContainer } from 'react-navigation';

import MyLibraryScreen          from "../screens/myLibrary/MyLibraryScreen";
import SettingScreen            from "../screens/settingScreen/SettingScreen";
import CatalogScreen            from "../screens/catalogScreen/CatalogScreen";
import AboutScreen              from "../screens/aboutScreen/AboutScreen";
import HomeScreen               from '../screens/homeScreen/HomeScreen';

const MainStackNavigator = createStackNavigator({
  HomeScreen:                       HomeScreen,
  AboutScreen:                      AboutScreen,
  CatalogScreen:                    CatalogScreen,
  SettingScreen:                    SettingScreen,
  MyLibraryScreen:                  MyLibraryScreen,
},{
  initialRouteName: 'HomeScreen',
  headerMode: 'none'
});

const AppNavigator = createAppContainer(MainStackNavigator);

export default AppNavigator;