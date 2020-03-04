import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native'

class LoginView extends Component {
    state = {
      email: '',
      password: '',
      image: 'https://i.pinimg.com/564x/63/02/eb/6302ebcfa0a93877e2c4d5d2f2d4da2d.jpg'
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

    getMoviesFromApiAsync = () =>  {
      if(this.state.email.trim().length > 0 && this.state.password.trim().length > 0){
        // let data = {
        //   method: 'GET',
        //   // credentials: 'same-origin',
        //   // mode: 'same-origin',
        //   // body: JSON.stringify({
        //   //   email: this.state.email,
        //   //   password : this.state.password
        //   // }),
        //   // headers: {
        //   //   'Accept':       'application/json',
        //   //   'Content-Type': 'application/json',
        //   // }
        // }
        // return fetch('http://127.0.0.1:5000/api/login?email='+this.state.email+'&password='+this.state.password, data)
        //   .then((response) => response.json())
        //   .then((responseJson) => {
        //     console.log(responseJson)
        //   })
        //   .catch((error) => {
        //     console.error('dsfsd');
        //   });
        var request = new XMLHttpRequest();
        request.onreadystatechange = e => {
          if (request.readyState !== 4) {
            return;
          }

          if (request.status === 200) {
            console.log('success', request.responseText);
          } else {
            console.warn('error');
          }
        };
        request.open('GET', 'http://192.168.0.140:8000/api/login?email='+this.state.email+'&password='+this.state.password);
        request.send();
      }
    }

    render() {
      return (
          <View style = {styles.container}>
              <Text style={styles.title}>
                Diabetes Detection App
              </Text>

              <TextInput style = {styles.input}
                placeholder = "Email"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}
                onPress={this.alertHi}/>
              
              <TextInput style = {styles.input}
                placeholder = "Password"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
              
              <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    this.getMoviesFromApiAsync
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
export default LoginView

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height:'100%',
    justifyContent: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'orange',
    borderWidth: 1,
    textAlign: 'center',
    width:'80%',
    // borderRadius: 50
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
    color: 'orange',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    marginBottom: '10%',
    fontFamily: 'cursive'
  },
  footerText: {
    paddingTop:40,
    color: 'white'
  },
  link: {
    color : 'orange',
    textDecorationLine : 'underline'
  } 


})