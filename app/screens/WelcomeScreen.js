import React from 'react';
import { Image, ImageBackground, StyleSheet, View,Text  } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        //add an image background component
        <ImageBackground 
        blurRadius={4}
        style={styles.background}
        source={require("../assets/background.jpg")}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <Text style={styles.tagline}>Sell your home items you no longer need</Text>
        </View> 
        <View style={styles.buttonsContainer}>
        <AppButton title="Login"/>
        <AppButton title="Register" color="secondary"/>
        </View>
        
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer:{
       padding: 20,
       width: "100%",
    },
    logo:{
        width: 100,
        height: 100,  
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
     tagline:{
        fontSize:  25,
        fontWeight: "100",
        justifyContent: "center",
        paddingVertical: 20,
     },
   

})

export default WelcomeScreen;