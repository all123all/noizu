import {
    createStackNavigator,
  } from 'react-navigation';
  import OptionScreen from "./src/screens/option/OptionScreen"

  export default createStackNavigator({
    OptionScreen:{
        screen: OptionScreen
    }
},
{
    initialRouteName: "OptionScreen"
});
