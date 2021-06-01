import React from 'react';
import {Keyboard, Text, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';

export default class Login extends React.Component{
    
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#AD1B1B",height:"100%"}}>
                <Image source ={require('../images/logo2.png')}
                    style={styles.image}
                />
                <Text
                    style={styles.texto1}
                    >Ranking</Text>
                    <View style={styles.container2}>
                        <Image source={require('../images/logo2.png')} style={styles.photo} />
                        <Text style={styles.text2}>Primer lugar</Text>
                        <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.container2}>
                        <Image source={require('../images/logo2.png')} style={styles.photo} />
                        <Text style={styles.text2}>Segundo lugar</Text>
                        <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.container2}>
                        <Image source={require('../images/logo2.png')} style={styles.photo} />
                        <Text style={styles.text2}>Tercer lugar</Text>
                        <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.container2}>
                        <Image source={require('../images/logo2.png')} style={styles.photo} />
                        <Text style={styles.text2}>Que pasa si pongo muchas cosas</Text>
                        <Text style={styles.text2}>...</Text>
            </View>
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
            height: "30%",
            width: "30%"
    },
    texto1: {
        alignItems:"center",
        justifyContent:"center",
        fontSize: 50,
        alignSelf:"center",
        fontWeight: "bold",
        paddingVertical:30,
        color:"white",
    },
    container2: {
        flex: 1,
        padding: 11,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "white",
        borderWidth: 3
      },
      text: {
        marginHorizontal:55,
        fontSize: 16,
        color:"white",
        fontFamily:"SemiBold",
        borderColor: "white",
      },
      text2: {
        marginHorizontal:55,
        fontSize: 10,
        alignSelf:"center",
        fontWeight: "bold",
        color:"white",
      },
      photo: {
        marginHorizontal:20,
        height: 73,
        width: 73,
        borderRadius: 20 
      },
  });