import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from "../screens/homeScreen/HomeScreen";

const HomeNavigator = createStackNavigator({
    Main: {
        screen: HomeScreen
    }
    }, {
        initialRouteName: 'Main',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);

export default HomeNavigator;