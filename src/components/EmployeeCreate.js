import React, { Component } from 'react';
import { Card, CardItem, Input, Button, DayPicker } from './commons';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

   onButtonPress() {
      const {name, phone, shift} = this.props;
      this.props.employeeCreate({ name, phone, shift : shift || 'Monday' });
   }

   render() {
      return(
         <Card>
            {/* Name input */}
            <CardItem>
               <Input
                  placeholder="Name"
                  value={this.props.name}
                  onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
               />
            </CardItem>

            {/* Phone Input */}
            <CardItem>
               <Input 
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  value={this.props.phone}
                  onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
               />
            </CardItem>

            {/* DayPicker */}
            <DayPicker
               selectedValue={this.props.shift}
               onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day})}
            />

            {/* Create button */}
            <CardItem>
               <Button onPress={this.onButtonPress.bind(this)}>
                  Create
               </Button>
            </CardItem>

         </Card>
      );
   }
}

const mapStateToProps = state => {
   const { name, phone, shift } = state.employeeUpdate;
   return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);