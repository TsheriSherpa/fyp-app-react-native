import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class App extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
           <Image source="" />
            <Text style={styles.title}>
              Diabetes Detection App
            </Text>

            <TextInput style = {styles.input}
               placeholder = "Email"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               placeholder = "Password"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>Don't have account? <Text style={styles.link}>Sign Up</Text></Text>
            <View style={{padding: 10}}>
              <Text style={styles.link}>Forgot Password??</Text>
            </View>   
         </View>
      )
   }
}
export default App

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      backgroundColor: 'orange',
      height:'100%',
      justifyContent: 'center'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'green',
      borderWidth: 1,
      textAlign: 'center',
      width:'80%',
      borderRadius: 50
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius:50,
      width: '40%'
   },
   submitButtonText: {
      color: 'white',
      textAlign:'center'
   },
   title: {
      color: 'green',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginBottom: '10%'
   },
   footerText: {
     paddingTop:40
   },
   link: {
     color : 'blue'
   }


})