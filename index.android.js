import React,{Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet } from 'react-native';
import {StackNavigator, NavigationActions, TabNavigator } from 'react-navigation';

import Splash from './component/splash.js';
import Main from './component/main.js';
import Camerarol from './component/camera.js';
import Croping from './component/cropingimage.js';
import ShareAndLogo from './component/shareandlogo.js';

class MainScreenNavigator extends Component {
  constructor(){
    super();
    this.state = {
      toggleSplash: false
    }
    setTimeout(() => { this.setState({toggleSplash: true}) }, 
      3000)
  }
 
  render(){
    let display = this.state.toggleSplash
    return(
      <View style={styles.center}>
          { !display ? <Splash />  :  <Main navigation={this.props.navigation}/> }
      </View>
    )
  }
}

var styles = StyleSheet.create({
  center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export const RecNavi = StackNavigator({
    Home:{ screen: MainScreenNavigator },
    Camerarol: { screen: Camerarol },
    Croping: { screen: Croping},
    ShareAndLogo: {screen: ShareAndLogo}
    },
    {headerMode: 'none'}
)

AppRegistry.registerComponent('RecNavi', () => RecNavi)