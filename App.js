import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import LoginView from "./screens/login-view.js"

export default function App(){
  return (
    <ImageBackground source={{uri:'https://i.pinimg.com/564x/63/02/eb/6302ebcfa0a93877e2c4d5d2f2d4da2d.jpg'}} 
                style = {styles.backgroundImage}>
      <LoginView/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    opacity:100
  } 
})