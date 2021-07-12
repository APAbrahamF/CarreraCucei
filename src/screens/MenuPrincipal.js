import React from 'react';
import {Keyboard, Text, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
  } from 'react-native';

 

export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={ primeroUser:'PrimerUser', 
    segundoUser:'SegundoUser', 
    tercerUser:'TercerUser',
    imagen1: 'https://carreracucei2021.000webhostapp.com/carreraApp/images/logo2.png',
    imagen2: 'https://carreracucei2021.000webhostapp.com/carreraApp/images/logo2.png',
    imagen3: 'https://carreracucei2021.000webhostapp.com/carreraApp/images/logo2.png',   
    usuarios: [],
    }
    this.getDatos();
    this.props.navigation.navigate("MenuPrincipal");
}
getDatos = () =>{
  fetch('https://carreracucei2021.000webhostapp.com/carreraApp/v1/getCarrera.php',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-type':'application/json'
    },
    body:JSON.stringify({
    })	
  }).then((response) => response.json())
   .then((responseJson)=>{
      const usuarios = responseJson;
      this.setState({primeroUser: usuarios[0].Nombre});
      this.setState({segundoUser: usuarios[1].Nombre});
      this.setState({tercerUser: usuarios[2].Nombre});
      this.setState({imagen1: usuarios[0].imagen});
      this.setState({imagen2: usuarios[1].imagen});
      this.setState({imagen3: usuarios[2].imagen});
   })
   .catch((error)=>{
   console.error(error);
   });
}
login = () =>{
  this.props.navigation.openDrawer();
  //alert("Successfully Login");
}
    
    render(){
        const {navigate} = this.props.navigation
        return(
          <View >
                <ImageBackground source={require('../images/background3.png')} style={styles.imageBackground}>
                <View style={styles.container3}>
                <Image source ={require('../images/CUCEI.png')}
                    style={styles.image2}
                />
                <TouchableOpacity style={styles.image3} onPress={this.login}>
                <Icon name="view-headline" color="#FFFFFF" size={40}/>
                </TouchableOpacity>
            </View>
                <Text
                    style={styles.texto1}
                    >Ranking</Text>
                    <View style={styles.container2}>
                        <Text style={styles.texto2}>1</Text>
                        <Image source={{uri: this.state.imagen1,}} style={styles.photo} />
                        <Text style={styles.text2}>{this.state.primeroUser}</Text>
            </View>
            <View style={styles.container2}>
                        <Text style={styles.texto2}>2</Text>
                        <Image source={{uri: this.state.imagen2,}} style={styles.photo} />
                        <Text style={styles.text2}>{this.state.segundoUser}</Text>
            </View>
            <View style={styles.container2}>
                        <Text style={styles.texto2}>3</Text>
                        <Image source={{uri: this.state.imagen3,}} style={styles.photo} />
                        <Text style={styles.text2}>{this.state.tercerUser}</Text>
            </View>
            <Image source ={require('../images/logo2.png')}
                    style={styles.image}
                />
            </ImageBackground>
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
      marginBottom:20,
        alignSelf:"center",
        resizeMode: "contain",
            height: "50%",
            width: "50%"
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
    texto2: {
      position: 'absolute',
      marginLeft: 10,
      left: 0,
      fontSize: 50,
      fontWeight: "bold",
      color:"white",
  },
    container2: {
        flex: 2,
        marginBottom: -50,
        padding: 11,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      container3: {
        marginTop:30,
        flex: 1,
        flexDirection: 'row',
      },
      text: {
        marginHorizontal:55,
        fontSize: 16,
        color:"white",
        fontFamily:"SemiBold",
        borderColor: "white",
      },
      text2: {
        position: 'absolute',
        marginLeft: 10,
        left: 120,
        marginHorizontal:55,
        fontSize: 13,
        alignSelf:"center",
        fontWeight: "bold",
        color:"white",
      },
      imageBackground: {
        resizeMode: "cover",
        justifyContent: "center",
        height:"100%"
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
      image2: {
        marginHorizontal:-150,
        resizeMode: "contain",
            height: "100%",
            width: "100%"
    },
    image3: {
      position: 'absolute',
        right: -200,
      resizeMode: "contain",
          height: "60%",
          width: "60%"
  },
  });