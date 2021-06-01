import React from 'react';
import {Keyboard, Text, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import { set } from 'react-native-reanimated';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userEmail:'',
            userPassword:''
        }
        //this.props.navigation.navigate("MenuPrincipal");
    }

    login = () =>{
		const {userEmail,userPassword} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userEmail==""){
			alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})
			
		}
		
		else if(reg.test(userEmail) === false)
		{
		alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(userPassword==""){
		this.setState({email:'Please enter password'})
		}
		else{
		
		fetch('http://192.168.1.109/kontakta/v1/loginCucei.php',{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-type':'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword,
			})	
		}).then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
                 this.props.navigation.navigate("MenuPrincipal");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
	}

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#AD1B1B",height:"100%"}}>
                <ImageBackground source={require('../images/background2.png')} style={styles.imageBackground}>
                <Image source ={require('../images/CUCEI.png')}
                    style={styles.image2}
                />
                <Text
                    style={styles.text}
                    >USUARIO</Text>
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:2,
                    paddingHorizontal:10,
                    borderColor:"#3B8DBE",
                    backgroundColor: "#0C1763",
                    borderRadius:23,
                    paddingVertical:0
                }}>
                    <Icon name="mail" color="#FFFFFF" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder = 'usuario'
                        onChangeText = {userEmail=>this.setState({userEmail})}
                    />

                    

                </View>
                <Text
                    style={styles.text}
                    >PASSWORD</Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:2,
                    paddingHorizontal:10,
                    borderColor:"#3B8DBE",
                    backgroundColor: "#0C1763",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color="#FFFFFF" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder = 'Contraseña'
                        onChangeText = {userPassword=>this.setState({userPassword})}
                    />

                    

                </View>
                <TouchableOpacity onPress={this.login}>
                <Image style={{ marginHorizontal:55, width: 120, height: 40, marginTop:20,}} 
                source ={require('../images/botonEntrar.png')} 
                />
                </TouchableOpacity >
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
        marginTop:-20,
        marginBottom:140,
        alignSelf:"center",
        resizeMode: "contain",
            height: "40%",
            width: "40%"
    },
    image2: {
        marginTop:-90,
        resizeMode: "contain",
            height: "30%",
            width: "30%"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        marginTop:20,
        marginHorizontal:55,
        fontSize: 10,
        color:"white",
        fontFamily:"SemiBold",
        borderColor: "white",
        paddingHorizontal:10,
      },
  });