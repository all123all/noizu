import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';


export default class AboutScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>AboutScreen</Text>
      </View>
    );    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFD',
    paddingTop: 24,
  },
});
