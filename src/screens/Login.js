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
    constructor(props){
        super(props)
        this.state={
            userEmail:'',
            userPassword:''
        }
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
            <View style={{backgroundColor:"#C20101",height:"100%"}}>
                <Image source ={require('../images/image.png')}
                    style={styles.image}
                />
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#FFFFFF",
                    borderRadius:23,
                    paddingVertical:0
                }}>
                    <Icon name="mail" color="#FFFFFF" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder = 'Correo'
                        onChangeText = {userEmail=>this.setState({userEmail})}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#FFFFFF",
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
                
                <View
                style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#FFFFFF",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text
                    onPress={this.login}
                    style={{
                        color:"#C20101",
                        fontFamily:"SemiBold"
                    }}>Entrar</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"white",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Registrate aqui</Text>
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
            height: "50%",
            width: "50%"
    },
  });