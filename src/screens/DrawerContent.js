import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useState } from 'react';


export function DrawerContent(props) {

        const [nombre, setNombre] = useState('PrimerUser');  
        const [distancia, setDistancia] = useState(10);  
        const [tiempo, setTiempo] = useState(1);
        const [imagen, setImagen] = useState('https://carreracucei2021.000webhostapp.com/carreraApp/images/logo2.png');  

    const paperTheme = useTheme();

    getUser = () =>{
        const codigo = '123121231';
        fetch('https://carreracucei2021.000webhostapp.com/carreraApp/v1/getUserCarrera.php',{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-type':'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				correo: codigo,
			})	
		}).then((response) => response.json())
		 .then((responseJson)=>{
            const usuarios = responseJson
            setNombre(usuarios[0].Nombre)
            setDistancia(usuarios[0].Distancia)
            setTiempo(usuarios[0].Tiempo)
            setImagen(usuarios[0].imagen)
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
    }
    getUser();
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../images/backgroundNav.png')} style={styles.imageBackground}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: imagen
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15}}>
                                <Title style={styles.title}>{nombre}</Title>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Caption style={styles.caption}>Distancia:</Caption>
                                <Paragraph style={[styles.paragraph, styles.caption2]}>{distancia}</Paragraph>
                            </View>
                            <View style={styles.section}>
                                <Caption style={styles.caption3}>Tiempo:</Caption>
                                <Paragraph style={[styles.paragraph, styles.caption2]}>{tiempo}</Paragraph>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color = "white"
                                size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => {props.navigation.navigate('Menu')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color = "white"
                                size={size}
                                />
                            )}
                            label="Registrar progreso"
                            onPress={() => {props.navigation.navigate('Menu')}}
                        />
                        
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={"white"}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate('Login')}}
                />
            </Drawer.Section>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:"white",
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:"white",
    },
    caption2: {
        marginLeft: 6,
        fontSize: 14,
        lineHeight: 14,
        color:"white",
      },
      caption3: {
        marginLeft:5,
        fontSize: 14,
        lineHeight: 14,
        color:"white",
      },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  });
