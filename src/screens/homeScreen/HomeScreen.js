import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Image, TouchableHighlight } from 'react-native';
import { Icon, ListItem, Divider } from 'react-native-elements';

import BottomTabNavigator from '../../navigation/BottomTabNavigator';

const homeIcon = require('../../../assets/kana1.png');
const menuIcon = require('../../../assets/kana1.png');
const chatIcon = require('../../../assets/kana1.png');
const notificacaoIcon = require('../../../assets/kana1.png');

export default class HomeScreen extends React.Component {
  render() {
    return(
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.itemContainerTouchable}
        onPress={() => this.navigateScreen('Home')}>
          <View style={styles.itemContainer}>
            <Icon 
              name="settings"
              color={'#614B70'}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>General</Text>
          </View>
          <View
          style={{height: 1, width: '100%', backgroundColor: '#614B70'}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainerTouchable}>
          <View style={styles.itemContainer}>
            <Icon 
              name="chrome-reader-mode"
              color={'#614B70'}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Reader</Text>
          </View>
          <View
          style={{height: 1, width: '100%', backgroundColor: '#614B70'}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainerTouchable}>
          <View style={styles.itemContainer}>
            <Icon 
              name="file-download"
              color={'#614B70'}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Downloads</Text>
          </View>
          <View
          style={{height: 1, width: '100%', backgroundColor: '#614B70'}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainerTouchable}>
          <View style={styles.itemContainer}>
            <Icon 
              name="compare-arrows"
              color={'#614B70'}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Tracking</Text>
          </View>
          <View
          style={{height: 1, width: '100%', backgroundColor: '#614B70'}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainerTouchable}>
          <View style={styles.itemContainer}>
            <Icon 
              name="backup"
              color={'#614B70'}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Backup</Text>
          </View>
          <View
          style={{height: 1, width: '100%', backgroundColor: '#614B70'}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainerTouchable}>
          <View style={styles.itemContainer}>
            <Icon 
              name="code"
              color={'#614B70'}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>Advanced</Text>
          </View>
          <View
          style={{height: 1, width: '100%', backgroundColor: '#614B70'}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainerTouchable}
        onPress={() => this.props.navigation.navigate('AboutScreen')}>
          <View style={styles.itemContainer}>
            <Icon 
              name="info"
              color={'#614B70'}
              style={styles.itemIcon}
            />
            <Text style={styles.itemText}>About</Text>
          </View>
          <View
          style={{height: 1, width: '100%', backgroundColor: '#614B70'}}
        />
        </TouchableOpacity>

        {/* <BottomTabNavigator /> */}

        <View style={styles.icons}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutScreen')}>
                  <Image
                      style={styles.iconImage}
                      source={homeIcon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                  <Image
                      style={styles.iconImage}
                      source={menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.navigateScreen('SettingScreen')}>
                  <Image
                      style={styles.iconImage}
                      source={chatIcon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.navigateScreen('CatalogScreen')}>
                  <Image
                      style={styles.iconImage}
                      source={notificacaoIcon}/>
              </TouchableOpacity>
          </View>
        
      </ScrollView>
    );    
  }
  navigateScreen(object) {
    this.props.navigation.navigate(object);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFD',
    paddingTop: 24,
  },
  itemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FDFCFD',
    paddingLeft: '3%',
  },
  itemContainerTouchable:{
    height: 55,
    marginTop: '1%',
  },
  itemIcon:{
    flex: 1,
    paddingBottom: '1%',
    paddingLeft: 10,
    paddingRight: '3%'
  },
  itemText:{
    flex: 1,
    paddingLeft: 10,
    textAlign: 'left',
  },
  imgContainer:{
    width: 110,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  imgItem:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'white'
  },


  icons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 26,
    marginRight: 16,
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 3,
    backgroundColor : 'transparent'
},
icon : {
    backgroundColor : 'transparent',
},
iconImage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    height: 50,
    width: 50,
    marginBottom: 0,
    marginTop: 80,
    marginLeft: 16,
    marginRight: 16,
},
});
