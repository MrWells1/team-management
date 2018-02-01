import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './commons';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class CreateEmployee extends Component {

   render() {
      return(
         <Card>
            <CardItem>
               <Input
                  placeholder="Name"
                  value={this.props.name}
                  onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
               />
            </CardItem>
            <CardItem>
               <Input 
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  value={this.props.phone}
                  onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
               />
            </CardItem>
            <CardItem>
               <Button>
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

export default connect(mapStateToProps, { employeeUpdate })(CreateEmployee);