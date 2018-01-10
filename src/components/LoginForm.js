import React, {Component} from 'react';
import {Card, CardItem, Input, Button} from './commons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {

   // Call Action Creator when user types some text
    onEmailChange(text) {
      this.props.emailChanged(text);
    }

    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    // Call Action Creator when user press the button
    onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
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
              <Button onPress = { this.onButtonPress.bind(this) } >
                Login
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