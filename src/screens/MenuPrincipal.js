import React from 'react';
import {Keyboard, Text, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
import { set } from 'react-native-reanimated';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#C20101",height:"100%"}}>
                <Image source ={require('../images/image.png')}
                    style={styles.image}
                />
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    image: {
        alignSelf:"center",
        resizeMode: "contain",
            height: "100%",
            width: "100%"
    },
  });