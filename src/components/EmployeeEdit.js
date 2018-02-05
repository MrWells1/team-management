import React, { Component } from 'react';
import _ from 'lodash';
import { text } from 'react-native-communications';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardItem, Button } from './commons';
import { employeeUpdate, employeeSave } from '../actions';
import { Text } from 'react-native';

class EmployeeEdit extends Component {

   componentWillMount() {
      _.each(this.props.employee, (value, prop) => {
         this.props.employeeUpdate({ prop, value });
      });
   }

   handleSaveChange() {
      const { name, phone, shift } = this.props;
      this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
   }

   handleText() {
      const { name, phone, shift } = this.props;
      text(phone, `Hi ${name}, your next shift is on ${shift}`);
   }

   render() {
      return(
         <Card>
            {/* EmployeeForm need to be passed { name, phone, shift } 
            as props to invoke employeeUpdate action */}
            <EmployeeForm {...this.props}/>

            <CardItem>
               <Button onPress={this.handleSaveChange.bind(this)}>
                  Save Changes
               </Button>
            </CardItem>

            <CardItem>
               <Button onPress={this.handleText.bind(this)}>
                  Text
               </Button>
            </CardItem>

            <CardItem>
               <Button>
                  Delete
               </Button>
            </CardItem>
         </Card>
      );
   }
}

const mapStateToProps = state => {
   const { name, phone, shift } = state.employeeForm;
   return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);