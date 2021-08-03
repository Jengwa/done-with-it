import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import colors from '../config/colos'

function WelcomeScreen(props) {
  return (
    <ImageBackground 
    style={styles.background}
    source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell what you don't need!</Text>
      </View>
     
      <View style={styles.loginButton}>
        <Text>Log In</Text>
      </View>
      <View style={styles.signUpButton}>
        <Text>Sign Up</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  signUpButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary
  }
})

export default WelcomeScreen;