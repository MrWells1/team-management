import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './commons';

class CreateEmployee extends Component {
   render() {
      return(
         <Card>
            <CardItem>
               <Input
                  placeholder="Name"
               />
            </CardItem>
            <CardItem>
               <Input 
                  placeholder="Phone Number"
                  keyboardType="numeric"
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

export default CreateEmployee;