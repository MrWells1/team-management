import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Card, CardItem, Input, Button} from './commons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Actions } from "react-native-router-flux";


class LoginForm extends Component {

   // Call Action Creator when user types some text
    onEmailChange(text) {
      this.props.emailChanged(text);
    }

    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    onLoginPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
    }

    onSignupPress() {
      Actions.signup();
    }

    render() {
      return(
         <Card>
            <CardItem>
               <Input
                  placeholder = 'Email' 
                  onChangeText = {this.onEmailChange.bind(this)} 
                  value = {this.props.email}
                  keyboardType='email-address'
               />
            </CardItem>

            <CardItem>
               <Input
                  secureTextEntry
                  placeholder = 'Password'
                  onChangeText = {this.onPasswordChange.bind(this)}
                  value = {this.props.password}
               />
            </CardItem>
            <View style={{backgroundColor: 'white'}}>
              <Text style={{color: 'red', fontSize: 20, paddingTop: 5, paddingBottom: 5, textAlign: 'center'}}>{this.props.error}</Text>
            </View>

            <CardItem>
              <Button onPress = { this.onLoginPress.bind(this) } >
                Login
              </Button>
            </CardItem>
            
            <Text style={styles.signupMessage}>First time here?</Text>
            <CardItem style={styles.signupCard}>
              <Button onPress = {this.onSignupPress.bind(this)}>
                Sign Up
              </Button>
            </CardItem>
         </Card>
      );
   }
}
// Connect state to LoginForm
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};

// Connect Action Creator to LoginForm component
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);

//Styling
const styles = {
  signupMessage: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
};