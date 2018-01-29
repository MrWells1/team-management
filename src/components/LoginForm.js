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

            <CardItem>
              <Button onPress = { this.onLoginPress.bind(this) } >
                Login
              </Button>
            </CardItem>
            <CardItem>
              <Text>First time here?</Text>
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
    password: state.auth.password
  };
};

// Connect Action Creator to LoginForm component
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);