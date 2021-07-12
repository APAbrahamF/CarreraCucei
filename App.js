import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import Constants from 'expo-constants';
import Login from './src/screens/Login';
import MenuPrincipal from './src/screens/MenuPrincipal'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { DrawerContent } from './src/screens/DrawerContent';


const Drawer = createDrawerNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 206, 1)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(18, 34, 69)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(255, 255, 255)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount(){
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }
  

  render(){
    return(
      (this.state.isFontLoaded === true) ? (
        <NavigationContainer theme={MyTheme} >
      <Drawer.Navigator initialRouteName="Home"  drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Login" 
        component={Login}
        //options = {{gestureEnabled: false}} 
        />
        <Drawer.Screen name="Menu"
        component={MenuPrincipal} />
      </Drawer.Navigator>
    </NavigationContainer>
      ):(AppLoading)
      
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    position: 'absolute',
    marginLeft: 10,
    left: 50,
    marginHorizontal:20,
    height: 50,
    width: 50,
    borderRadius: 20 
  },
  imageBackground: {
    resizeMode: "cover",
    justifyContent: "center",
    height:"100%"
  },
});
